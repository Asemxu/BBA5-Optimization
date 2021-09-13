import ReactGA from 'react-ga';
import { useDispatch } from 'react-redux';
import { changeRegisterStep } from '../../Redux/Actions/Auth';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { Team } from '../../Images/Decorations/Aditionals';
import { logoPaw2 } from '../../Images/Logos';
import { typesFooterAvatars, typesHeaders } from '../../types/ui';

export const PageAvatars = () => {
  const dispatch = useDispatch();

  const goNext = () => {
    ReactGA.event({
      category: 'TUTORIAL AL REGISTRARSE',
      action: 'Jugamos con (CONTINUAR)',
    });
    dispatch(changeRegisterStep(1));
  };

  return (
    <WrapperMain showAvatars nameAvatars={typesFooterAvatars.logos}>
      <Header name={typesHeaders.mainAvatars} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__md">
          <h1 className="title__md">Esta vez jugaremos con</h1>
        </div>
        <div className="main__content__avatars bg__light">
          <img
            src={logoPaw2}
            alt="Logo Paw Patrol La Película"
            title="Logo Paw Patrol La Película"
            className="logo__paw animate__animated animate__pulse"
          />
          <img
            src={Team}
            alt="Patrulla"
            title="Patrulla"
            className="img__team animate__animated animate__pulse"
          />
        </div>
        <div className="buttons">
          <Button isPrimary text="Continuar" onClick={goNext} />
        </div>
      </div>
    </WrapperMain>
  );
};
