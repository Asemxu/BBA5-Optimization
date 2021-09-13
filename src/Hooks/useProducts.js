import { useEffect } from 'react';
import { useState } from 'react';
import { fetchNotToken } from '../Helpers/Bba5/api/fetch';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetchNotToken('/products');

        const body = await resp.json();
        setIsloading(false);
        if (body.length > 0) {
          setProducts(body);
        } else {
        }
      } catch (error) {}
    };
    getProducts();
  }, [products]);

  return {
    products,
    isLoading,
  };
};
