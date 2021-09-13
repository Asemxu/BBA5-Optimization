import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';

import { FormAddBallot } from '../../Forms/FormAddBallot';

export const PageAddBallot = () => {
  const history = useHistory();

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__md">
          <h1 className="title__md">Agrega una boleta</h1>
        </div>
        <div className="content__description mt-1 px-md-1 px-lg-3">
          <p className="text-center">
            Encuentra aquí el código de tu boleta de compra
          </p>
        </div>
        <FormAddBallot />
      </div>
    </WrapperMain>
  );
};
