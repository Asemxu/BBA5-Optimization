import React from 'react';
import PropTypes from 'prop-types';

export const TitleGilded = ({ text, isBig = true }) => {
  return (
    <div
      className={`parent__title__gilded ${isBig ? '' : 'title__gilded__md'}`}
    >
      <div className="bg__title__gilded">
        <div></div>
      </div>
      <p>{text}</p>
    </div>
  );
};

TitleGilded.propTypes = {
  text: PropTypes.string.isRequired,
};
