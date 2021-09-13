import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { FormPasswordRecovery } from '../../Forms';
import { typesHeaders, typesFooterAvatars } from '../../types/ui';

export const PagePasswordRecovery = () => {
  const history = useHistory();

  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  if (isRegisterBtn === '') {
    return <Redirect to="/" />;
  }
  return (
    <WrapperMain showAvatars nameAvatars={typesFooterAvatars.chaseMarshallSkye}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__sm px-1">
          <h1 className="title__bg">Recupera tu contraseña</h1>
        </div>
        <div className="content__description my-3">
          <p className="text-center">
            Ingresa tu correo electrónico y te enviaremos las instrucciones para
            crear una nueva contraseña.
          </p>
        </div>
        <FormPasswordRecovery />
      </div>
    </WrapperMain>
  );
};
