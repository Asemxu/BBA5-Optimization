import React from 'react';
import { terms } from '../../../../data/legacys';

export const Rules1A4 = () => {
  return terms.itemsDots.map((dot, index) => (
    <div className="legacy__item" key={index}>
      <h3 className="legacy__subtitle">
        {index + 1}. {dot.title}
      </h3>
      {dot.sub_items.map((subItem, index) => (
        <div className="mb-2 ms-lg-3" key={index}>
          <p>{subItem.description}</p>
          {subItem?.items?.length !== 0 && subItem?.items && (
            <ul>
              {subItem.items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  ));
};
