import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { logoBBA } from '../../Images/Logos';
import { typesHeaders } from '../../types/ui';
import { selectedMainButton } from '../../Redux/Actions/UI';

const PageMain = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) sessionStorage.setItem('reference_code', code);
  }, [code]);

  const selectedBtn = (button) => {
    let isRegister = false;
    if (button === 'register') {
      isRegister = true;
    }
    const action = isRegister ? 'Crear Cuenta' : 'Iniciar Sesión';
    localStorage.setItem('is-register', isRegister);
    ReactGA.event({
      category: 'PORTADA',
      action,
    });
    ReactPixel.track('Contact');
    dispatch(selectedMainButton(isRegister));
    history.push('/cuentas');
  };
  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.main} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title">
          <h1 className="title__bg">Te damos la bienvenida a</h1>
        </div>
        <div className="content__logo__main">
          <img
            src={logoBBA}
            alt="Logo de BBA5"
            title="Logo de BBA5"
            className="animate__animated animate__pulse"
          />
        </div>
        <div className="buttons">
          <Button
            isPrimary
            text="Crear cuenta"
            onClick={() => selectedBtn('register')}
          />
          <Button text="Iniciar sesión" onClick={() => selectedBtn('loggin')} />
        </div>
      </div>
    </WrapperMain>
  );
};


export default PageMain