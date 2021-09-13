import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  text,
  isPrimary,
  onClick,
  isBig,
  type = 'button',
  staticBtn = false,
}) => {
  return (
    <div
      className={`${
        isPrimary ? 'parent__btn__bg__primary' : 'parent__btn__bg__secundary'
      } ${staticBtn ? 'staticBtn' : ''}`}
    >
      <div
        className={`${isPrimary ? 'btn__bg__primary' : 'btn__bg__secundary'}`}
      >
        <button
          className={`btn ${isPrimary ? 'btn__primary' : 'btn__secundary'} ${
            isBig ? 'px-4' : ''
          }`}
          type={type}
          onClick={onClick}
          title={text}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

Button.defaultProps = {
  isPrimary: false,
  isBig: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isBig: PropTypes.bool,
  onClick: PropTypes.func,
};
