import ReactGA from 'react-ga';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, startLogin } from '../Redux/Actions/Auth';
import { useForm } from './useForm';
import { fetchIP } from '../Helpers/Bba5/api/fetch';
import { isValidateEmail } from '../Helpers/Bba5/validations';

export const useFormLogin = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowErrorMessage('');
    ReactGA.event({
      category: 'INICIAR SESIÓN',
      action: 'Inicio de sesión',
    });

    const ip = await fetchIP();

    if (fieldErrors()) return;

    const new_values = {
      ...formValues,
      ip,
    };
    const body = await dispatch(login(new_values));
    setLoading(false);
    if (body.success) {
      reset();
      dispatch(startLogin({ isLogin: true, num: 1 }));
    } else {
      setShowErrorMessage(body.msg);
    }
  };

  const fieldErrors = () => {
    if (!isValidateEmail(formValues.email)) {
      showMessage('Por favor ingrese un correo válido.');
      return true;
    } else if (formValues.email.length < 0) {
      showMessage('Por favor ingrese su correo.');
      return true;
    } else if (formValues.password.length < 0) {
      showMessage('Por favor ingrese la contraseña.');
      return true;
    }
  };
  const showMessage = (message) => {
    setTimeout(() => {
      setLoading(false);
      setShowErrorMessage(message);
    }, 800);
  };
  return {
    formValues,
    handleInputChange,
    handleSubmit,
    loading,
    showErrorMessage,
  };
};
