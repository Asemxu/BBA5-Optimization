import React from 'react';

import { WrapperMain } from '../../Wrappers/WrapperMain';

import { Header } from '../../Components/Header';
import { FormPasswordNew } from '../../Forms';
import { Bone } from '../../Images/Decorations/Aditionals';
import { typesHeaders, typesFooterAvatars } from '../../types/ui';

export const PagePasswordNew = () => {
  return (
    <WrapperMain showAvatars nameAvatars={typesFooterAvatars.chase}>
      <Header name={typesHeaders.main} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title">
          <h1 className="title__bg">Crea una nueva contraseña</h1>
          <img src={Bone} alt="Bone" title="Bone" />
        </div>
        <FormPasswordNew />
      </div>
    </WrapperMain>
  );
};
