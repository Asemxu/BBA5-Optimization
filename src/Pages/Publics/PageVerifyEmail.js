import ReactGA from 'react-ga';
import { Link, useHistory } from 'react-router-dom';
import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesHeaders, typesFooterAvatars } from '../../types/ui';

export const PageVerifyEmail = () => {
  const history = useHistory();

  const goPagePasswordRecovery = () => {
    ReactGA.event({
      category: 'RECUPERAR CONTRASEÑA',
      action: 'Recuperar contraseña de otro correo',
    });
    history.push('/recuperar-cuenta');
  };
  return (
    <WrapperMain showAvatars nameAvatars={typesFooterAvatars.chaseMarshallSkye}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title">
          <h1 className="title__bg">¡Correo enviado!</h1>
        </div>
        <div className="content__description mt-2 mb-4">
          <p className="text-center">
            Es momento de revisar tus correos recibidos y seguir los pasos
            necesarios para recuperar tu contraseña
          </p>
          <div className="buttons mx-auto">
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
              className="text-center w-100"
            >
              <Button type="button" isPrimary text="Verificar" />
            </a>
          </div>
        </div>
      </div>
      <div className="content__description mt-2 mb-4 px-5">
        <p className="text-center">
          ¿Aún no recibes nuestro correo?
          <br />
          No olvides revisar tu carpeta de spam o intenta &nbsp;
          <Link onClick={goPagePasswordRecovery} className="text__yellow__300">
            usar otro correo electrónico
          </Link>
        </p>
      </div>
    </WrapperMain>
  );
};
