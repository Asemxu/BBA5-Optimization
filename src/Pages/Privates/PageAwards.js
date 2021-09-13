import ReactGA from 'react-ga';
import { useDispatch } from 'react-redux';
import { changeRegisterStep } from '../../Redux/Actions/Auth';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';

import {
  carrito,
  resbaladera,
  torre,
  scooter,
  casita,
} from '../../Images/Decorations/awards';

const PageAwards = () => {
  const dispatch = useDispatch();

  const goNext = () => {
    ReactGA.event({
      category: 'TUTORIAL AL REGISTRARSE',
      action: 'Premios (CONTINUAR)',
    });
    dispatch(changeRegisterStep(2));
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header
        name={typesHeaders.goback}
        onClick={() => dispatch(changeRegisterStep(0))}
      />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__sm">
          <h1 className="title__md">
            ¡Juega y participa del sorteo de uno de los 18 premios semanales!
          </h1>
        </div>
        <div className="bg__light mt-3">
          <div className="grid__awards">
            <div className="award">
              <div className="white-image"></div>
              <img className="award-image" alt="Premio Carrito" src={carrito} />
              <p>2 carritos</p>
            </div>
            <div className="award">
              <div className="white-image"></div>
              <img
                className="award-image"
                alt="Premio Resbaladeras"
                src={resbaladera}
              />
              <p>2 resbaladeras</p>
            </div>
            <div className="award">
              <div className="white-image"></div>
              <img className="award-image" alt="Premios 2 Torres" src={torre} />
              <p>2 torres</p>
            </div>
            <div className="award">
              <div className="white-image"></div>
              <img className="award-image" alt="Premio Scooter" src={scooter} />
              <p>2 scooter</p>
            </div>
            <div className="award">
              <div className="white-image"></div>
              <img className="award-image" alt="Premios casitas" src={casita} />
              <p>10 casitas</p>
            </div>
          </div>
        </div>
        <div className="buttons mt-5">
          <Button isPrimary text="Continuar" onClick={goNext} />
        </div>
      </div>
    </WrapperMain>
  );
};

export default PageAwards