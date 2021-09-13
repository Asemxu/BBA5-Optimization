import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { typesHeaders } from '../../types/ui';
import { Header } from '../../Components/Header';

import { Positions, EmptyPosition, MyPosition } from '../../Components/ranking';
import { StarsBlue } from '../../Images/Decorations/Aditionals';
import { useSelector } from 'react-redux';
import { Spinner } from '../../Components/Spinner';

const PageRanking = () => {
  const history = useHistory();
  const {
    tops: { loading, my_top, list },
  } = useSelector((state) => state.information);

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex justify-content-center flex-column">
        <div className="content__title__sm">
          <img
            src={StarsBlue}
            alt="Estrellas azules"
            title="Estrellas azules"
            className="img__big animate__animated animate__heartBeat"
          />
          <h1 className="title__md">Ranking</h1>
        </div>

        {loading && (
          <div className="text-center">
            <Spinner />
            <h3 className="text__white mt-3 px-5">Cargando lista de ranking</h3>
          </div>
        )}

        {!loading && (
          <>
            {list.length > 0 && <Positions />}
            {my_top.length === 0 ? <EmptyPosition /> : <MyPosition />}
          </>
        )}
      </div>
    </WrapperMain>
  );
};
export default PageRanking