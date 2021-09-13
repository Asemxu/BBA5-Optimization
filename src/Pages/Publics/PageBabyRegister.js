import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { FormBabyRegister } from '../../Forms';
import { typesHeaders } from '../../types/ui';
import { useSelector } from 'react-redux';

 const PageBabyRegister = () => {
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
          <h1 className="title__bg">Llena los datos de tu bebé</h1>
        </div>
        <FormBabyRegister />
      </div>
    </WrapperMain>
  );
};

export default PageBabyRegister
