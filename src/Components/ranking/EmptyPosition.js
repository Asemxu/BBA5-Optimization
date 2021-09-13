import React from 'react';
import { ChasePts } from '../../Images/Decorations/Avatars';

export const EmptyPosition = () => {
  return (
    <div className="parent__my__position parent__empty">
      <img
        src={ChasePts}
        alt="Chase"
        title="Chase"
        className="animate__animated animate__pulse"
      />
      <div className="bg__my__position">
        <div className="my__position empty__position">
          <p></p>
          <p>
            Aún no te encuentras en el Ranking, participa para entrar al sorteo.
          </p>
        </div>
      </div>
    </div>
  );
};
