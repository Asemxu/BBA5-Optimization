import ReactGA from 'react-ga';
import React , { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import { toggleMenu, toggleModalInfo } from '../../Redux/Actions/UI';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Buttons';


import { typesHeaders } from '../../types/ui';

import bone from '../../Images/Decorations/Aditionals/bone.svg';
import { babyMain } from '../../Images/Decorations/Baby';
import { useEffect } from 'react';

const Information = lazy(() =>import('../../Components/modals/Information'))
const MiniTour = lazy(() =>import('../../Components/modals/MiniTour'))

const PageWellcome = () => {
  const {
    logged: { num, registerStep },
  } = useSelector((state) => state.auth);
  const { hasBallots, hasOpportunities } = useSelector(
    (state) => state.information
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('ranking-item'))) {
      history.push('/usuario/ranking');
      sessionStorage.setItem('ranking-item', false);
    }
  }, [history]);

  const game = () => {
    let action = '';
    if (hasOpportunities.is) {
      action = 'Jugar';
    } else if (!hasOpportunities.is) {
      action = 'Más Oportunidades';
    }

    ReactGA.event({
      category: 'PRINCIPAL',
      action,
    });
    ReactPixel.trackCustom('StartTrial', {
      value: '0.00',
      currency: 'PEN',
      predicted_ltv: '0.00',
    });

    if (!hasBallots && hasOpportunities.is) {
      dispatch(toggleModalInfo(true));
    } else if (hasBallots && hasOpportunities.is) {
      history.push('/usuario/personajes');
    } else if (!hasOpportunities.is) {
      history.push('/usuario/compartir');
    }
  };

  const pageBallot = () => {
    ReactGA.event({
      category: 'PRINCIPAL',
      action: 'Agregar Boleta',
    });
    ReactPixel.track('AddPaymentInfo');
    history.push('/usuario/agregar-boleta');
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header
        name={typesHeaders.menu}
        onClick={() => dispatch(toggleMenu(true))}
      />
      <div className="wellcome d-flex justify-content-center flex-column mb-5">
        <div className="content__title">
          <img src={bone} alt="Hueso" title="Hueso" />
          <h1 className="title__md mt-3">¡Es momento de jugar!</h1>
        </div>
        <div className="wellcome-content">
          <img
            src={babyMain}
            alt="Baby"
            title="Baby"
            className="animate__animated animate__pulse"
          />
          <p>
            Agrega el código de tu boleta para jugar mucho más y ganar los
            premios de NINET
          </p>
          <Button text="Agregar boleta" onClick={pageBallot} />
        </div>

        {!hasOpportunities.loading && (
          <Button
            isPrimary
            text={hasOpportunities.is ? 'JUGAR' : 'Más Oportunidades'}
            onClick={game}
          />
        )}
      </div>
      {num === 0 &&
        registerStep !== 0 &&
        registerStep !== 1 &&
        registerStep !== 5 && <MiniTour />}

      <Information />
    </WrapperMain>
  );
};
export default PageWellcome