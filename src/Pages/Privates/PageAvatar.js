import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';

export const PageAvatar = () => {
  const {
    selected: { avatar },
  } = useSelector((state) => state.ui);
  const { name, id, image2 } = avatar;
  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  const history = useHistory();

  const changePage = (page) => {
    ReactGA.event({
      category: 'PERSONAJE ELEGIDO',
      action: page === 'game' ? 'Jugar' : 'Ver tutorial',
    });

    if (page === 'game') {
      history.push({
        pathname: '/usuario/juego',
        state: { avatar: name, id },
      });
    } else if (page === 'instruction-1') {
      history.push('/usuario/instruccion-1');
    }
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title__sm">
          <h1 className="title__bg">¡Es momento de divertirse!</h1>
        </div>
        <div className="bg__light2">
          <img src={image2} alt={name} title={name} />
        </div>
        <div className="buttons mt-4">
          {(!isRegisterBtn || isRegisterBtn === '') && (
            <Button isPrimary text="JUGAR" onClick={() => changePage('game')} />
          )}
          <Button
            text="Ver tutorial"
            onClick={() => changePage('instruction-1')}
          />
        </div>
      </div>
    </WrapperMain>
  );
};
