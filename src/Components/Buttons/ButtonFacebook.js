import React from 'react';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';

// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { btnFacebook } from '../../Images/Decorations/Buttons';

export const ButtonFacebook = () => {
  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  const openFb = () => {
    localStorage.setItem('is-register', isRegisterBtn);
    ReactGA.event({
      category: isRegisterBtn ? 'REGISTRO' : 'INICIAR SESIÓN',
      action: isRegisterBtn
        ? 'Registro con facebook'
        : 'Inicio de sesión con facebook',
    });
    window.open('https://www.bebeaventurero.com/back-end/public/fbredirect');
    window.close();
  };
  return (
    <img
      src={btnFacebook}
      alt="Botón de Facebook"
      title="Botón de Facebook"
      onClick={openFb}
    />
  );
};
