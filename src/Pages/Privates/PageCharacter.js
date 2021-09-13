import { useState } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedAvatar } from '../../Redux/Actions/UI';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Buttons';
import { Spinner } from '../../Components/Spinner';
import { typesHeaders } from '../../types/ui';
import { ErrorMessage } from '../../Components/messages/ErrorMessage';

const PageCharacter = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    characters: { data, loading },
  } = useSelector((state) => state.information);
  const [avatar, setAvatar] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const selectedCharacter = (character) => {
    dispatch(selectedAvatar(character));

    setAvatar(character);
  };

  const goPageAvatar = () => {
    setShowMessage(false);

    ReactGA.event({
      category: 'PERSONAJES',
      action: 'Personaje elegido: ' + avatar.name,
    });

    if (avatar === '') {
      setShowMessage(true);
      return;
    }
    history.push('/usuario/personaje');
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        {loading && (
          <div className="text-center">
            <Spinner />
            <h3 className="text__white">Cargando personajes</h3>
          </div>
        )}
        {!loading && data.length > 0 && (
          <>
            <div className="content__title__sm">
              <h1 className="title__md">Elige a tu personaje favorito</h1>
            </div>
            <div className="personajes mt-4 mb-0">
              {data.map(({ character, id, image1, image2 }, index) => (
                <div
                  className={`personaje ${
                    avatar.name === character ? 'activated' : ''
                  }`}
                  key={index}
                >
                  <div className="personaje-image">
                    <img
                      src={image1}
                      title={character}
                      alt={character}
                      onClick={() =>
                        selectedCharacter({ name: character, id, image2 })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {showMessage && (
              <div className="mx-4 mb-4 text-center">
                <ErrorMessage text="Por favor Mami seleccione su personaje favorito." />
              </div>
            )}
            <div className="d-flex justify-content-center">
              <Button isPrimary text="ELEGIR" onClick={goPageAvatar} />
            </div>
          </>
        )}
      </div>
    </WrapperMain>
  );
};
export default PageCharacter