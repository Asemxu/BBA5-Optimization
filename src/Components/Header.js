import React from 'react';
import PropTypes from 'prop-types';

import { logoPaw, logoNinet } from '../Images/Logos';
import { typesHeaders } from '../types/ui';
import { btnGoBack, btnMenu } from '../Images/Decorations/Buttons';

export const Header = ({ name, onClick }) => {
  if (name === typesHeaders.main) {
    return (
      <div className="header__main main">
        <div></div>
        <img
          src={logoNinet}
          alt="Logo Ninet"
          title="Logo Ninet"
          className="logo mx-auto"
        />
        <img
          src={logoPaw}
          alt="Logo Paw Patrol La Película"
          title="Logo Paw Patrol La Película"
          className="logo__paw"
        />
      </div>
    );
  } else if (name === typesHeaders.menu || name === typesHeaders.goback) {
    return (
      <div className="header__main main__2">
        {name === typesHeaders.goback ? (
          <img
            src={btnGoBack}
            alt="Regresar"
            title="Regresar"
            className="decoration__2 align-self-center"
            onClick={onClick}
          />
        ) : (
          <img
            src={btnMenu}
            alt="Menu"
            title="Menu"
            className="decoration__2 align-self-center"
            onClick={onClick}
          />
        )}
        <img
          src={logoNinet}
          alt="Logo Ninet"
          title="Logo Ninet"
          className="logo mx-auto"
        />
        <img
          src={logoPaw}
          alt="Logo Paw Patrol La Película"
          title="Logo Paw Patrol La Película"
          className="logo__paw"
        />
      </div>
    );
  } else if (name === typesHeaders.goback2) {
    return (
      <div className="header__main main__3">
        <img
          src={btnGoBack}
          alt="Regresar"
          title="Regresar"
          className="decoration__2 align-self-center"
          onClick={onClick}
        />
        <img
          src={logoNinet}
          alt="Logo Ninet"
          title="Logo Ninet"
          className="logo mx-auto"
        />
        <div></div>
      </div>
    );
  } else if (name === typesHeaders.mainAvatars) {
    return (
      <div className="header__main d-flex justify-content">
        <img
          src={logoNinet}
          alt="Logo Ninet"
          title="Logo Ninet"
          className="logo mx-auto"
        />
      </div>
    );
  }
};

Header.defaultProps = {
  name: typesHeaders.main,
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
