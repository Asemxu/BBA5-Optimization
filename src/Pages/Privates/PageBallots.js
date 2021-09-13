import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Buttons';
import { TitleGilded } from '../../Components/TitleGilded';
import { Ballots } from '../../Components/ballots/Ballots';
import { typesHeaders } from '../../types/ui';

const PageBallots = () => {
  const history = useHistory();

  const changePage = (url, page) => {
    let action = '';
    if (page === 'add-ballots') {
      action = 'Agregar boleta';
    } else if (page === 'game') {
      action = 'Jugar';
    }

    ReactGA.event({
      category: 'AGREGAR BOLETA',
      action,
    });

    history.push(url);
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex justify-content-center flex-column page__ballots">
        <div className="content__title__md">
          <h1 className="title__bg">Mis boletas</h1>
        </div>

        <Ballots />
        <TitleGilded text="Mami, no olvides que para reclamar tus premios, debes guardar tus boletas de compra." />

        <div className="buttons">
          <Button
            text="Agregar boleta"
            onClick={() => changePage('/usuario/agregar-boleta', 'add-ballots')}
          />
          <Button
            isPrimary
            text="JUGAR"
            onClick={() => changePage('/usuario/personajes', 'game')}
          />
        </div>
      </div>
    </WrapperMain>
  );
};

export default PageBallots