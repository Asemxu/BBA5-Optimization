import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useFormLogin, useTooglePass } from '../Hooks';

import { Button } from '../Components/Buttons';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { Spinner } from '../Components/Spinner';
import { registerWith } from '../Redux/Actions/UI';
import { useDispatch } from 'react-redux';

export const FormLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { togglePass, showPass, inputPassword } = useTooglePass();

  const {
    formValues,
    handleInputChange,
    handleSubmit,
    loading,
    showErrorMessage,
  } = useFormLogin();

  const { email, password } = formValues;

  const goPageRegister = () => {
    dispatch(registerWith(1));
    history.push('/registro-paso1');
    ReactGA.event({
      category: 'INICIAR SESIÓN',
      action: 'Crear cuenta',
    });
  };

  const goPagePasswordRecovery = () => {
    ReactGA.event({
      category: 'INICIAR SESIÓN',
      action: 'Recuperar contraseña',
    });
    history.push('/recuperar-cuenta');
  };

  return (
    <form className="content__form__login" onSubmit={handleSubmit}>
      <div className="content__input">
        <input
          className="form-control"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Correo electrónico"
        ></input>
      </div>
      <div className="content__input input__pass">
        <input
          className="form-control"
          type="password"
          ref={inputPassword}
          name="password"
          value={password}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Contraseña"
        ></input>
        {showPass ? (
          <i className="fas fa-eye" onClick={togglePass}></i>
        ) : (
          <i className="fas fa-eye-slash" onClick={togglePass}></i>
        )}
      </div>
      <div className="content_enlace text-center mt-5">
        <button onClick={goPagePasswordRecovery} type="button" className="link">
          Olvide mi contraseña
        </button>
      </div>

      {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="buttons">
          <Button type="submit" isPrimary text="Iniciar sesión" />
          <Button text="Crear cuenta" onClick={goPageRegister} />
        </div>
      )}
    </form>
  );
};
