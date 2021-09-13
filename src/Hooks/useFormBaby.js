import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import { decryptPassword } from '../Helpers/Bba5/passwords';
import { fetchIP } from '../Helpers/Bba5/api/fetch';

import {
  changeRegisterStep,
  registerBaby,
  startLogin,
} from '../Redux/Actions/Auth';
import { useForm } from './useForm';
import { setBabyInfo } from '../Redux/Actions/BBA5/information';

export const useFormBaby = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    selected: { registerWith },
  } = useSelector((state) => state.ui);

  const { formParentBaby } = useSelector((state) => state.information);
  const [formvalues, handleInputChange, reset] = useForm({
    ...formParentBaby,
    terms_and_conditions: '',
    privacy_policies: '',
    additional: '',
  });
  const {
    checksRegister: { terms, policy, programInkaClub },
  } = useSelector((state) => state.ui);

  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [gender, setGender] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      const exist_SS = sessionStorage.getItem('baby-info') ? true : false;
      if (exist_SS) {
        const updateInfoBaby = JSON.parse(sessionStorage.getItem('baby-info'));
        dispatch(setBabyInfo(updateInfoBaby));
        setGender(updateInfoBaby.baby_gender);
        setYear(updateInfoBaby.baby_birthday_y);
        setMonth(updateInfoBaby.baby_birthday_m);
      }
    }

    return () => {
      setIsMounted(true);
    };
  }, [dispatch, isMounted]);

  useEffect(() => {
    const code = sessionStorage.getItem('reference_code');
    if (code) setReferenceCode(code);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage('');
    setLoading(true);

    ReactGA.event({
      category: 'REGISTRO',
      action: 'Datos de bebé.',
    });

    if (fieldErrors()) return;
    const ip = await fetchIP();

    const new_values = {
      ...formvalues,
      baby_gender: gender,
      baby_birthday_m: month,
      baby_birthday_y: year,
      terms_and_conditions: terms && 1,
      privacy_policies: policy && 1,
      additional: programInkaClub && 1,
      ip,
      reference_code: referenceCode,
    };

    if (registerWith === 1) {
      /* with correo */
      new_values.password = decryptPassword(
        JSON.parse(sessionStorage.getItem('parent-info')).password
      );
    } else if (registerWith === 2) {
      /* with fb */
      new_values.password = decryptPassword(sessionStorage.getItem('user'));
    }

    const body = await dispatch(registerBaby(new_values));
    setLoading(false);
    if (body.success) {
      dispatch(changeRegisterStep(0));
      dispatch(startLogin({ isLogin: true, num: 0 }));
      ReactPixel.trackCustom('Subscribe', {
        value: '0.00',
        currency: 'PEN',
        predicted_ltv: '0.00',
      });
      ReactGA.event({
        category: 'REGISTRO',
        action: 'Registro Éxitoso',
      });
      if (registerWith === 1) {
        ReactGA.event({
          category: 'REGISTRO',
          action: 'Registro Éxitoso (Correo)',
        });
      } else if (registerWith === 2) {
        ReactGA.event({
          category: 'REGISTRO',
          action: 'Registro Éxitoso (Facebook)',
        });
      }
      reset();
    } else {
      setShowErrorMessage(body.msg);
    }
  };

  const handleMonthChange = ({ target }) => {
    setMonth(Number(target.options[target.selectedIndex].value));
  };

  const handleYearChange = ({ target }) => {
    setYear(Number(target.options[target.selectedIndex].value));
  };

  const handleGenderChange = ({ target }) => {
    setGender(Number(target.options[target.selectedIndex].value));
  };
  const fieldErrors = () => {
    if (formvalues.baby_name.length < 0) {
      showMessage('Por favor ingrese el nombre de su bebé.');
      return true;
    } else if (gender === '') {
      showMessage('Por favor ingrese el género de su bebé.');
      return true;
    } else if (formvalues.baby_birthday_d.length < 0) {
      showMessage('Por favor ingrese el día en que nació de su bebé.');
      return true;
    } else if (month === '') {
      showMessage('Por favor ingrese el mes en que nació de su bebé.');
      return true;
    } else if (year === '') {
      showMessage('Por favor ingrese el año en que nació de su bebé.');
      return true;
    } else if (!terms) {
      showMessage(
        'Por favor acepte los términos y condiciones para continuar con el registro.'
      );
      return true;
    } else if (!policy) {
      showMessage(
        'Por favor acepte la política de privacidad para continuar con el registro.'
      );
      return true;
    } else if (!programInkaClub) {
      showMessage(
        'Por favor acepte lo que implica el registro en el Programa InkaClub para continuar con el registro.'
      );
      return true;
    }
  };

  const showMessage = (message) => {
    setTimeout(() => {
      setLoading(false);
      setShowErrorMessage(message);
    }, 800);
  };

  const updateInfoBaby = (url) => {
    let action;
    if (url === '/terminos-condiciones') {
      action = 'Leer Términos y Condiciones';
    } else if (url === '/politica-privacidad') {
      action = 'Leer Política y Privacidad.';
    } else if (url === '/programa-inkaclub') {
      action = 'Leer Programa Inkaclub.';
    }
    ReactGA.event({
      category: 'REGISTRO',
      action,
    });

    const { terms_and_conditions, privacy_policies, additional, ...data } =
      formvalues;
    const info = {
      ...data,
      baby_birthday_m: month,
      baby_birthday_y: year,
      baby_gender: gender,
    };
    sessionStorage.setItem('baby-info', JSON.stringify(info));
    dispatch(setBabyInfo(info));
    history.push(url);
  };

  return {
    formvalues,
    handleInputChange,
    showErrorMessage,
    gender,
    month,
    year,
    loading,
    handleSubmit,
    handleMonthChange,
    handleYearChange,
    handleGenderChange,
    updateInfoBaby,
  };
};
