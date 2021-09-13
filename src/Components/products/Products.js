import React from 'react';
import { ProductInfo } from './ProductInfo';

export const Products = ({ products }) => {
  return (
    <div className="list__products scrollbar mb-4">
      {products.map((prod) => (
        <ProductInfo
          key={prod.id}
          image={prod.image ?? ''}
          name={prod.name ?? ''}
        />
      ))}
    </div>
  );
};
