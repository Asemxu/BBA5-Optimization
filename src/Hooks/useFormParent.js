import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import { editParent, registerParent } from '../Redux/Actions/Auth';
import { setParentInfo } from '../Redux/Actions/BBA5/information';
import { useForm } from './useForm';

import { decryptPassword, encryptPassword } from '../Helpers/Bba5/passwords';
import { isNumber, isValidateEmail } from '../Helpers/Bba5/validations';
import { getUserInformation } from '../Helpers/UI/getUserInformation';

export const useFormParent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cities, formParentRegister } = useSelector(
    (state) => state.information
  );
  const {
    selected: { registerWith },
  } = useSelector((state) => state.ui);

  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  let city = useRef('');
  const [defaultCity, setDefaultCity] = useState({
    label: 'Lima',
    value: 16,
  });

  const [month, setMonth] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [type_doc, setType_doc] = useState('');

  const [formvalues, handleInputChange, reset] = useForm(formParentRegister);

  useEffect(() => {
    if (!isMounted) {
      const { success, data = {} } = getUserInformation(registerWith);

      if (success) {
        dispatch(setParentInfo(data));
        setMonth(data.parent_birthday_m);
        setType_doc(data.type_doc);

        city.current.state.value = cities.find((c) => c.value === data.city_id);
        setDefaultCity(cities.find((c) => c.value === data.city_id).label);
      }
    }

    return () => {
      setIsMounted(true);
    };
  }, [registerWith, dispatch, cities, isMounted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage('');
    setLoading(true);

    const birthday_day = isNumber({
      number: formvalues.parent_birthday_d,
      return_num: true,
    });

    const birthday_year = isNumber({
      number: formvalues.parent_birthday_y,
      return_num: true,
    });

    const birthday_year_string = birthday_year?.num + '';

    if (fieldErrors({ birthday_day, birthday_year, birthday_year_string }))
      return;

    /* DATA FOR SESSION STORAGE */
    const new_values_SS = {
      ...formvalues,
      parent_birthday_d: birthday_day.num,
      parent_birthday_m: month,
      parent_birthday_y: birthday_year.num,
      password: encryptPassword(formvalues.password),
      password_confirmation: encryptPassword(formvalues.password_confirmation),
      city_id: cities.find((c) => c.label === city.current.state.value.label)
        .value,
      type: registerWith,
      type_doc,
    };

    const new_values = {
      ...new_values_SS,
      password: formvalues.password,
      password_confirmation: formvalues.password_confirmation,
    };

    if (registerWith === 2) {
      delete new_values.password;
      delete new_values.password_confirmation;
      delete new_values_SS.password;
      delete new_values_SS.password_confirmation;
      new_values.fb_user = decryptPassword(sessionStorage.getItem('user'));
    }

    const edit_parent = sessionStorage.getItem('uuid') ? true : false;
    let body;
    if (edit_parent) {
      body = await dispatch(editParent(new_values));
    } else {
      body = await dispatch(registerParent(new_values));
    }

    setLoading(false);

    if (body.success) {
      sessionStorage.setItem('parent-info', JSON.stringify(new_values_SS));
      dispatch(setParentInfo(new_values));
      history.push('/registro-paso2');
      ReactPixel.track('CompleteRegistration');
      ReactGA.event({
        category: 'REGISTRO',
        action: 'Datos de Mami',
      });
      reset();
    } else {
      setShowErrorMessage(body.msg);
    }
  };

  const fieldErrors = ({
    birthday_day,
    birthday_year,
    birthday_year_string,
  }) => {
    if (formvalues.parent_document.length < 8) {
      showMessage('Por favor ingrese un documento válido.');
      return true;
    } else if (type_doc === '') {
      showMessage('Por favor seleccione un tipo de documento.');
      return true;
    } else if (!isValidateEmail(formvalues.email)) {
      showMessage('Por favor ingrese un correo válido.');
      return true;
    } else if (city.current.state.value.label === '') {
      showMessage('Por favor seleccione una ciudad.');
      return true;
    } else if (
      formvalues.password !== formvalues.password_confirmation &&
      registerWith === 1
    ) {
      showMessage('Las contraseña no coindicen.');
      return true;
    } else if (formvalues.password.length < 5 && registerWith === 1) {
      showMessage('Las contraseña deben tener como minimo 6 caracteres.');
      return true;
    } else if (!birthday_day.success) {
      showMessage('Por favor ingrese un día de nacimiento válido.');
      return true;
    } else if (birthday_day.success && birthday_day.num < 1) {
      showMessage('Por favor ingrese su día de nacimiento mayor a 0.');
      return true;
    } else if (birthday_day.success && birthday_day.num > 32) {
      showMessage('Por favor ingrese su día de nacimiento válido.');
      return true;
    } else if (month === '') {
      showMessage('Por favor seleccione su mes de nacimiento.');
      return true;
    } else if (!birthday_year.success) {
      showMessage('Por favor seleccione un año de nacimiento válido.');
      return true;
    } else if (birthday_year.success && birthday_year_string.length !== 4) {
      showMessage('Por favor seleccione un año de nacimiento válido.');
      return true;
    }
  };

  const handleMonthChange = ({ target }) => {
    setMonth(Number(target.options[target.selectedIndex].value));
  };

  const handleTypeDocument = ({ target }) => {
    setType_doc(Number(target.options[target.selectedIndex].value));
  };

  const showMessage = (message) => {
    setTimeout(() => {
      setLoading(false);
      setShowErrorMessage(message);
    }, 800);
  };
  return {
    formvalues,
    handleSubmit,
    handleTypeDocument,
    handleInputChange,
    handleMonthChange,
    month,
    showErrorMessage,
    defaultCity,
    city,

    type_doc,
    loading,
  };
};
