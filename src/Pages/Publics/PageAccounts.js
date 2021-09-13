import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerWith, selectedMainButton } from '../../Redux/Actions/UI';
import { setParentInfo } from '../../Redux/Actions/BBA5/information';
import {
  changeRegisterStep,
  login,
  startLogin,
  validateEmail,
} from '../../Redux/Actions/Auth';
import { encryptPassword } from '../../Helpers/Bba5/passwords';
import { fetchIP } from '../../Helpers/Bba5/api/fetch';
import { typesHeaders } from '../../types/ui';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { ButtonFacebook } from '../../Components/Buttons';
import { btnCorreo } from '../../Images/Decorations/Buttons';
import { Spinner } from '../../Components/Spinner';
import { ErrorMessage } from '../../Components/messages/ErrorMessage';
// import { readStrangeCharacters } from '../../Helpers/UI/readStrangeCharacters';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const PageAccounts = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(
      selectedMainButton(JSON.parse(localStorage.getItem('is-register')))
    );
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const responseFacebook = async (data_) => {
    if (data_.userID) {
      const { userID, name, email } = data_;
      const data = {
        name,
        email,
      };
      setLoading(true);
      setShowErrorMessage('');
      if (isRegisterBtn) {
        if (!data.email) {
          loggedNotEmail({ data, userID });
          return;
        }
        const resp = dispatch(validateEmail({ email }));
        setLoading(false);

        // console.log('validate-email', resp);
        if (resp.success) {
          dispatch(setParentInfo(data));
          sessionStorage.setItem('user', encryptPassword(userID));
          pageChange(2);
        } else {
          setShowErrorMessage(resp.msg);
        }
      } else {
        const ip = await fetchIP();
        const res = dispatch(
          login({
            ...data,
            password: userID,
            ip,
          })
        );
        setLoading(false);
        if (res.success) {
          dispatch(changeRegisterStep(5));
          dispatch(startLogin({ isLogin: true, num: 1 }));
        } else {
          setShowErrorMessage(res.msg);
        }
      }
    } else {
      setShowErrorMessage(
        'Mami, al parecer no te has logeado correctamente, por favor vuelve a intentarlo'
      );
    }
  };

  useEffect(() => {
    const data = {
      name: query.get('n') ?? '',
      userID: query.get('d') ?? '',
      email: query.get('e') ?? '',
    };

    if (data.name !== '' && data.userID !== '' && data.email !== '') {
      responseFacebook(data);
    }
  }, [query, responseFacebook]);

  const pageChange = (account) => {
    ReactPixel.track('Lead');
    if (isRegisterBtn) {
      if (account === 1) {
        ReactGA.event({
          category: 'REGISTRO',
          action: 'Registro con correo',
        });
      }

      history.push('/registro-paso1');
      dispatch(registerWith(account));
    } else {
      if (account === 1) {
        history.push('/iniciar-sesion');
        ReactGA.event({
          category: 'INICIAR SESIÓN',
          action: 'Inicio de Sesión con correo',
        });
      }
    }
  };

  const loggedNotEmail = ({ data, userID }) => {
    delete data.email;
    dispatch(setParentInfo(data));
    sessionStorage.setItem('user', encryptPassword(userID));
    ReactGA.event({
      category: 'REGISTRO',
      action: 'Registro con facebook sin correo',
    });

    history.push('/registro-paso1');
    dispatch(registerWith(1));
    return;
  };

  return (
    <WrapperMain>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title mb-4">
          <h1 className="title__bg title__md">
            Puedes {isRegisterBtn ? 'registrarte' : 'acceder a tu cuenta'}{' '}
            usando:
          </h1>
        </div>
        <div className="buttons">
          <ButtonFacebook className="cursor-pointer -mt-8" />

          <img
            src={btnCorreo}
            alt="Botón de Correo"
            title="Botón de Correo"
            onClick={() => pageChange(1)}
          />
        </div>

        {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}

        {loading && (
          <div className="text-center loading__accounts__fb">
            <Spinner />
            <h4 className="text__white mt-3">Validando datos</h4>
          </div>
        )}
      </div>
    </WrapperMain>
  );
};
