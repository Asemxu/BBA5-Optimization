import React ,{ lazy } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';

const FormLogin = lazy(() => import('../../Forms/FormLogin'));


const PageLogin = () => {
  const history = useHistory();
  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  if (isRegisterBtn === '') {
    return <Redirect to="/" />;
  }

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title">
          <h1 className="title__bg">¡Inicia sesión</h1>
          <h2 className="title__md">y empieza a jugar!</h2>
        </div>
        <FormLogin />
      </div>
    </WrapperMain>
  );
};

export default PageLogin