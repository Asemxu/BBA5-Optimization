import React from 'react';
import { terms } from '../../../../data/legacys';

export const RuleGame = () => {
  return (
    terms.rulesGame && (
      <div className="legacy__item">
        <h3 className="legacy__subtitle">{terms.rulesGame.title}</h3>
        {terms.rulesGame.items.map((text, index) => (
          <p
            className="mb-2 ms-lg-3"
            key={index}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    )
  );
};
