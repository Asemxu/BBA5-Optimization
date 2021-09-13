import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../../Wrappers/WrapperMain';
import { Button } from '../../../Components/Buttons';
import { Header } from '../../../Components/Header';
import { typesHeaders } from '../../../types/ui';
import { ArrowTop } from '../../../Images/Decorations/Aditionals';

const PageInstruction2 = () => {
  const history = useHistory();

  const nextPage = (_) => {
    ReactGA.event({
      category: 'TUTORIAL',
      action: 'Instrucción 2 (SIGUIENTE)',
    });
    history.push('/usuario/instruccion-3');
  };

  const goBack = () => {
    ReactGA.event({
      category: 'TUTORIAL',
      action: 'Regresar a Instrucción 1',
    });
    history.push('/usuario/instruccion-1');
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={goBack} />
      <div className="content__main height__100 d-flex flex-column align-self-center px-0">
        <div className="content__title__sm">
          <h1 className="title__bg">Evita los obstáculos</h1>
        </div>
        <div className="content__description description__md mt-2">
          <p className="text-center">
            tocando la pantalla en el momento justo para cambiar de rumbo o
            saltar
          </p>
        </div>
        <div className="position-relative text-center instruction__2__imgs">
          <div className="buttons position-absolute w-100">
            <Button isPrimary text="Siguiente" onClick={nextPage} />
          </div>
          <img src={ArrowTop} alt="Flecha" title="Flecha" />
        </div>
      </div>
    </WrapperMain>
  );
};
export default PageInstruction2