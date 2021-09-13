import React from 'react';
import { useSelector } from 'react-redux';
import { ChasePts } from '../../Images/Decorations/Avatars';

export const MyPosition = () => {
  const {
    tops: {
      my_top: { points, text },
    },
  } = useSelector((state) => state.information);
  return (
    <div className="parent__my__position">
      <img
        src={ChasePts}
        alt="Chase"
        title="Chase"
        className="animate__animated animate__pulse"
      />
      <div className="bg__my__position">
        <div className="my__position">
          <p></p>
          <p>Estás en el {text} puesto</p>
          <p>{points} pts</p>
        </div>
      </div>
    </div>
  );
};
