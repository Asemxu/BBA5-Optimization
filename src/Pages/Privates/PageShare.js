import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../Redux/Actions/UI';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { useLocation } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';
import { DogsShare } from '../../Images/Decorations/Avatars';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const PageShare = () => {
  let query = useQuery();
  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  useEffect(() => {
    const refCode = sessionStorage.getItem('code');
    if (refCode) setCode(refCode);

    // console.log(query.get('p'));
  }, [query]);

  const selected = (account) => {
    ReactGA.event({
      category: 'COMPARTIR',
      action: account,
    });
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header
        name={typesHeaders.menu}
        onClick={() => dispatch(toggleMenu(true))}
      />
      <div
        className="content__main d-flex flex-column align-self-center"
        style={{ padding: '1rem' }}
      >
        <div className="content__title__md">
          <h1 className="title__md">
            {query.get('p')
              ? '¡Comparte el juego!'
              : '¿Se acabaron tus oportunidades?'}
          </h1>
        </div>
        <div className="content__description description__md mt-2 mb-4">
          <p className="text-center">
            {query.get('p')
              ? 'Invita a tus amigos a jugar y disfrutar de una nueva aventura en Bebé Aventurero 5'
              : 'Comparte el juego y gana 10 oportunidades más invitando a tus amigos a registrarse en Bebé Aventurero 5'}
          </p>
        </div>
        <div className="main__content__avatars">
          <img
            src={DogsShare}
            alt="Chase, Skye y Marshall"
            className="animate__animated animate__pulse"
          />
        </div>
        <div className="buttons buttons__social__media mt-3 mb-4">
          <WhatsappShareButton
            url={`https://www.bebeaventurero.com/${
              !query.get('p') ? 'code/' + code : ''
            }`}
            title="Te invito a jugar, participar y ganar uno de los premios que te ofrece www.bebeaventurero.com"
            onClick={() => selected('En whatsapp')}
          >
            <div className="btn btn__wsp">
              <div>
                <p>WhatsApp</p>
              </div>
            </div>
          </WhatsappShareButton>

          <FacebookShareButton
            url={`https://www.bebeaventurero.com/${
              !query.get('p') ? 'code/' + code : ''
            }`}
            quote="Te invito a jugar, participar y ganar uno de los premios que te ofrece www.bebeaventurero.com"
            onClick={() => selected('En facebook')}
          >
            <div className="btn btn__fb">
              <div>
                <p>Facebook</p>
              </div>
            </div>
          </FacebookShareButton>
        </div>
      </div>
    </WrapperMain>
  );
};
