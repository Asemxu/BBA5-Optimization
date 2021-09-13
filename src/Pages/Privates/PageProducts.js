import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';
import { Products } from '../../Components/products/Products';
import { useProducts } from '../../Hooks';
import { Spinner } from '../../Components/Spinner';

const PageProducts = () => {
  const history = useHistory();
  const { products, isLoading } = useProducts();

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main justify-content-center d-flex flex-column">
        <div className="content__title__sm">
          <h1 className="title__md">Productos participantes</h1>
        </div>
        {isLoading && (
          <div className="text-center h-100 flex-column d-flex justify-content-center">
            <Spinner />
            <h3 className="text__white mt-3 px-5">Cargando productos</h3>
          </div>
        )}
        {products.length > 0 && <Products products={products} />}
      </div>
    </WrapperMain>
  );
};
export default PageProducts