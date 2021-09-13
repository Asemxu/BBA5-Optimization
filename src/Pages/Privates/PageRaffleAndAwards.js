import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';

import { Header } from '../../Components/Header';
import { Raffles } from '../../Components/raffle-awards/Raffles';
import { TitleGilded } from '../../Components/TitleGilded';
import { CarouselAwards } from '../../Components/raffle-awards/CarouselAwards';
import { typesHeaders } from '../../types/ui';
import { useSelector } from 'react-redux';
import { Spinner } from '../../Components/Spinner';

export const PageRaffleAndAwards = () => {
  const history = useHistory();
  const {
    drawerDates: { loading, data },
  } = useSelector((state) => state.information);

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center raffle-awards">
        {loading && (
          <div className="text-center">
            <Spinner />
            <h3 className="text__white mt-3 px-5">
              Cargando fechas de sorteos
            </h3>
          </div>
        )}

        {!loading && (
          <div className="mb-4">
            <div className="content__title__md">
              <h1 className="title__bg">Sorteos y premios</h1>
            </div>
            {data.length > 0 && <Raffles />}
            <TitleGilded text="¡Mira los premios!" isBig={false} />
            <CarouselAwards />
          </div>
        )}
      </div>
    </WrapperMain>
  );
};
