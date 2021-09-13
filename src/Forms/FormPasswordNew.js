import ReactGA from 'react-ga';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useForm, useTooglePass } from '../Hooks';

import { Button } from '../Components/Buttons';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { Spinner } from '../Components/Spinner';
import { changePassword } from '../Redux/Actions/Auth';
import { useDispatch } from 'react-redux';

const FormPasswordNew = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { togglePass, showPass, inputPassword } = useTooglePass();
  const {
    togglePass: togglePass2,
    showPass: showPass2,
    inputPassword: inputPassword2,
  } = useTooglePass();
  const [values, handleInputChange, reset] = useForm({
    token,
    password: '',
    password_confirmation: '',
  });

  const { password, password_confirmation } = values;
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage('');
    setLoading(true);
    ReactGA.event({
      category: 'CREAR NUEVA CONTRASEÑA',
      action: 'Cambio de contraseña',
    });

    if (values.password !== values.password_confirmation) {
      setLoading(false);
      setShowErrorMessage('Las contraseñas no coindicen.');
      return;
    }

    const resp = await dispatch(changePassword(values));
    setLoading(false);
    if (resp.success) {
      reset();
      history.push('/contraseña-recuperada');
    } else {
      setShowErrorMessage(resp.msg);
    }
    return;
  };

  const goPageHome = () => {
    history.push('/');
    ReactGA.event({
      category: 'CREAR NUEVA CONTRASEÑA',
      action: 'Ir al Inicio',
    });
  };
  return (
    <form
      className="content__form__passs__recovery px-4"
      onSubmit={handleSubmit}
    >
      <>
        <div className="content__input input__pass">
          <input
            className="form-control"
            type="password"
            name="password"
            ref={inputPassword}
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Contraseña"
            required
          ></input>
          {showPass ? (
            <i className="fas fa-eye" onClick={togglePass}></i>
          ) : (
            <i className="fas fa-eye-slash" onClick={togglePass}></i>
          )}
        </div>
        <div className="content__input input__pass">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            ref={inputPassword2}
            value={password_confirmation}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Confirma tu contraseña"
            required
          ></input>
          {showPass2 ? (
            <i className="fas fa-eye" onClick={togglePass2}></i>
          ) : (
            <i className="fas fa-eye-slash" onClick={togglePass2}></i>
          )}
        </div>
      </>

      {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="buttons">
          <Button isPrimary isBig type="submit" text="Cambiar contraseña" />
          <Button text="Ir al inicio" onClick={goPageHome} />
        </div>
      )}
    </form>
  );
};

export default FormPasswordNew