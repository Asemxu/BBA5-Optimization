import React from 'react';
import { terms } from '../../../../data/legacys';

export const GeneralConsiderations = () => {
  return (
    <div className="legacy__item">
      <h3 className="legacy__subtitle">9. CONSIDERACIONES GENERALES </h3>
      <div className="mb-2 ms-lg-3">
        <ul>
          {terms.considerations.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  );
};
