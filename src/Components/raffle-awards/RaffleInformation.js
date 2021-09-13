import React from 'react';

export const RaffleInformation = ({ date, text }) => {
  return (
    <div className="raffle__information">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text__grayDark">{text}:</p>
        <p className="text__cyan">{date}</p>
      </div>
    </div>
  );
};
