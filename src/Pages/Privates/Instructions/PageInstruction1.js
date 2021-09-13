import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../Components/Buttons';
import { Header } from '../../../Components/Header';
import { Award, Star } from '../../../Images/Decorations/Aditionals';
import { typesHeaders } from '../../../types/ui';
import { WrapperMain } from '../../../Wrappers/WrapperMain';

export const PageInstruction1 = () => {
  const history = useHistory();

  const nextPage = () => {
    ReactGA.event({
      category: 'TUTORIAL',
      action: 'Instrucción 1 (SIGUIENTE)',
    });
    history.push('/usuario/instruccion-2');
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header
        name={typesHeaders.goback}
        onClick={() => history.push('/usuario/personaje')}
      />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__sm">
          <h1 className="title__md">Atrapa la mayor cantidad de estrellas</h1>
        </div>
        <div className="content__product__start">
          <div className="start bg__glitter">
            <img src={Star} alt="Estrella" title="Estrella" />
          </div>
          <div className="product bg__glitter">
            <img src={Award} alt="Premio" title="Premio" />
          </div>
        </div>
        <div className="buttons mt-4">
          <Button isPrimary text="Siguiente" onClick={nextPage} />
        </div>
      </div>
    </WrapperMain>
  );
};
