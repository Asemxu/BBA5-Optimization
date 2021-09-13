import ReactGA from 'react-ga';
import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesFooterAvatars, typesHeaders } from '../../types/ui';
import { ChaseSkye } from '../../Images/Decorations/Avatars';
import { useHistory } from 'react-router-dom';

const PageRecoveryConfirm = () => {
  const { push } = useHistory();

  const goPageHome = () => {
    ReactGA.event({
      category: 'CREAR NUEVA CONTRASEÑA',
      action: 'Iniciar Sesión',
    });
    push('/iniciar-sesion');
  };

  return (
    <WrapperMain showAvatars nameAvatars={typesFooterAvatars.logos}>
      <Header name={typesHeaders.goback} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__md">
          <h1 className="title__md">¡Tu contraseña ha sido recuperada!</h1>
        </div>
        <div className="main__content__avatars bg__light p-5">
          <img
            src={ChaseSkye}
            alt="Patrulla"
            title="Patrulla"
            className="animate__animated animate__pulse"
          />
        </div>
        <div className="content__description description__md">
          <p className="text-center">
            Ahora puedes usar tu nueva contraseña e iniciar sesión
          </p>
        </div>
        <div className="buttons">
          <Button isPrimary text="Iniciar sesión" onClick={goPageHome} />
        </div>
      </div>
    </WrapperMain>
  );
};

export default PageRecoveryConfirm