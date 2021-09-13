import React from 'react';

export const PositionUsers = ({ name = '', position = '', points = '' }) => {
  return (
    <div className="position__users">
      <div className="user__position animate__animated animate__flash">
        <img
          src={`../../Images/Decorations/Numbers/${position}.png`}
          alt={`Posición ${position}`}
        />
      </div>
      <div className="user__name">
        <p title={name}>
          {name === ''
            ? '---------------'
            : name.length > 16
            ? name.slice(0, 18) + '...'
            : name}
        </p>
      </div>
      <div className="user__pts">
        <p>{points === '' ? '--' : points} pts.</p>
      </div>
    </div>
  );
};
