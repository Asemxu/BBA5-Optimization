import React from 'react';

export const ProductInfo = ({image, name}) => {
  return (
    <div className="product__information">
      <div className="product__img">
        <img
          src={image}
          alt={name}
          title={name}
          className="animate__animated animate__bounce animate__slow"
        />
      </div>
      <div className="product__description">
        <p>{name}</p>
      </div>
    </div>
  );
};
