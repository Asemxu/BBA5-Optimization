import React from 'react';
import {
  Chase1,
  Chase2,
  ChaseMarshallSkye,
  Rubble1,
} from '../Images/Decorations/Avatars';
import {
  logoLightNickelodeon,
  logoParamount,
  logoSpinMaster,
} from '../Images/Logos';
import { typesFooterAvatars } from '../types/ui';

export const WrapperMain = ({ children, showAvatars, nameAvatars }) => {
  const rows = 'rows__2';
  return (
    <div
      className={`container__main d-grid ${!showAvatars ? rows : ''} ${
        showAvatars && nameAvatars === typesFooterAvatars.logos
          ? 'row__logos'
          : ''
      }`}
    >
      {children}
      {showAvatars && nameAvatars === typesFooterAvatars.chaseRubble && (
        <div className="avatars d-flex justify-content-between align-items-center">
          <img
            src={Chase1}
            alt="Chase"
            title="Chase"
            className="animate__animated animate__pulse"
          />
          <img
            src={Rubble1}
            alt="Rubble"
            title="Rubble"
            className="animate__animated animate__pulse"
          />
        </div>
      )}
      {showAvatars && nameAvatars === typesFooterAvatars.chaseMarshallSkye && (
        <div className="avatars d-flex justify-content-center align-items-end">
          <img
            src={ChaseMarshallSkye}
            alt="Chase"
            title="Skye, Chase y Marshall"
            className="w-100 h-100 animate__animated animate__pulse"
          />
        </div>
      )}
      {showAvatars && nameAvatars === typesFooterAvatars.chase && (
        <div className="avatars d-flex justify-content-end align-items-end">
          <img
            src={Chase2}
            alt="Chase"
            title="Chase"
            className="w-100-2 w-100 animate__animated animate__pulse"
          />
        </div>
      )}
      {showAvatars && nameAvatars === typesFooterAvatars.logos && (
        <div className="logos d-flex gap-3 justify-content-center align-items-center">
          <img
            src={logoLightNickelodeon}
            alt="Logo Nickelodeon"
            title="Logo Nickelodeon"
            className="logo__nickelodeon"
          />
          <img
            src={logoParamount}
            alt="Logo Paramount"
            title="Logo Paramount"
          />
          <img
            src={logoSpinMaster}
            alt="Logo Spin Master"
            title="Logo Spin Master"
          />
        </div>
      )}
    </div>
  );
};

WrapperMain.defaultProps = {
  showAvatars: true,
  nameAvatars: typesFooterAvatars.chaseRubble,
};
