import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCheckPolicy } from '../../Redux/Actions/UI';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';
import { privacy } from '../../data/legacys/privacy';

const PagePrivacyPolicy = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const accept = () => {
    ReactGA.event({
      category: 'REGISTRO',
      action: 'Aceptar Política de Privacidad',
    });
    dispatch(toggleCheckPolicy(true));
    history.goBack();
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column justify-content-center align-self-center px-5">
        <div className="content__title__sm">
          <h1 className="title__md">Política de Privacidad</h1>
        </div>
        <div className="content__body content__legacy scrollbar text-center">
          {privacy.description.map((item, index) => (
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: item }}
              key={index}
            />
          ))}
          {privacy.data.map((data, index) => (
            <div className="legacy__item mt-4" key={index}>
              <h3 className="legacy__subtitle">{data.title}</h3>
              <div className="mb-2 ms-lg-3">
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
                {data.list ? (
                  <ul>
                    {data.list.map((item) => (
                      <li dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                ) : null}
                {data.footerText ? (
                  <p dangerouslySetInnerHTML={{ __html: data.footerText }} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="buttons mt-5">
          <Button isPrimary text="Aceptar" onClick={accept} />
        </div>
      </div>
    </WrapperMain>
  );
};

export default PagePrivacyPolicy