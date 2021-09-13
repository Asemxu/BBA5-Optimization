import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { babyMain } from '../../Images/Decorations/Baby';
import { typesHeaders } from '../../types/ui';
import {
  getInfoGame,
  setResetAddedBallots,
} from '../../Redux/Actions/BBA5/information';
import { Spinner } from '../../Components/Spinner';

const PageBallotMessage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    countsBallots: { loading, count },
  } = useSelector((state) => state.information);

  useEffect(() => {
    dispatch(setResetAddedBallots());
    dispatch(getInfoGame());
  }, [dispatch]);

  const changePage = (url, page) => {
    let action = '';
    if (page === 'game') {
      action = 'Jugar';
    } else if (page === 'add-ballots') {
      action = 'Agregar boleta';
    }
    ReactGA.event({
      category: 'MENSAJE AL ACTIVAR UNA BOLETA',
      action,
    });

    history.push(url);
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header
        name={typesHeaders.goback}
        onClick={() => history.push('/usuario')}
      />
      <div className="d-flex justify-content-center flex-column">
        {loading && (
          <div className="text-center">
            <Spinner />
            <h3 className="text__white mt-3 px-5">Validando boletas</h3>
          </div>
        )}
        {!loading && (
          <>
            <div className="content__title">
              <h1 className="title__md mt-3">¡Bien hecho, mami!</h1>
            </div>
            {count <= 2 && (
              <div className="content__description description__md mt-2 mb-4">
                <p className="text-center">
                  Ya puedes participar de los sorteos
                </p>
              </div>
            )}
            {count === 3 && (
              <div className="content__title">
                <h1 className="title__md mt-3">Ganaste +300pts</h1>
              </div>
            )}

            <div className="main__baby text-center">
              <img
                src={babyMain}
                alt="Baby"
                title="Baby"
                className="animate__animated animate__pulse"
              />
            </div>
            <div className="content__description text-center description__md mt-4 mb-3 px-5">
              <p>
                {count <= 2 &&
                  'Recuerda que, si ingresas 3 boletas cada semana, iniciarás con 300 puntos en tus partidas de esa misma semana'}
                {count === 3 &&
                  'Ahora estarás iniciando todas tus partidas de esta semana con 300 puntos'}
                {count >= 4 &&
                  'Ahora estarás iniciando todas tus partidas de esta semana con 300 puntos'}
              </p>
            </div>
            <div className="buttons">
              <Button
                isPrimary
                text="JUGAR"
                onClick={() => changePage('/usuario/personajes', 'game')}
              />
              <Button
                text="Activar otra boleta"
                onClick={() =>
                  changePage('/usuario/agregar-boleta', 'add-ballots')
                }
              />
            </div>
          </>
        )}
      </div>
    </WrapperMain>
  );
};

export default PageBallotMessage