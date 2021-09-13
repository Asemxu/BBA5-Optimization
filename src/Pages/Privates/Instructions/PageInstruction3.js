import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../../Wrappers/WrapperMain';
import { Header } from '../../../Components/Header';
import { typesHeaders } from '../../../types/ui';
import { Button } from '../../../Components/Buttons';
import { Hand } from '../../../Images/Decorations/Aditionals';
import { useSelector } from 'react-redux';

const PageInstruction3 = () => {
  const history = useHistory();
  const { selected } = useSelector((state) => state.ui);

  const nextPage = (_) => {
    ReactGA.event({
      category: 'TUTORIAL',
      action: 'Instrucción 3 (JUGAR)',
    });
    history.push({
      pathname: '/usuario/juego',
      state: { avatar: selected.avatar },
    });
  };

  const goBack = () => {
    ReactGA.event({
      category: 'TUTORIAL',
      action: 'Regresar a Instrucción 2',
    });
    history.push('/usuario/instruccion-2');
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={goBack} />
      <div className="content__main d-flex flex-column align-self-center px-0">
        <div className="content__description description__lg mb-2">
          <p className="text-center">Y recuerda</p>
        </div>
        <div className="content__title__sm">
          <h1 className="title__bg">No debes deslizar</h1>
        </div>
        <div className="instruction__3__imgs mt-4">
          <div className="line mx-auto"></div>
          <div className="button__red mx-auto mt-4">
            <p>¡No!</p>
          </div>
          <img src={Hand} alt="Mano" title="Mano" />
        </div>
        <div className="buttons">
          <Button isPrimary text="JUGAR" onClick={nextPage} />
        </div>
      </div>
    </WrapperMain>
  );
};


export default PageInstruction3