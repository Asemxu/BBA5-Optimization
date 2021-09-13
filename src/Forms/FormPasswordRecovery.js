import ReactGA from 'react-ga';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from '../Hooks';
import { Button } from '../Components/Buttons';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { Spinner } from '../Components/Spinner';
import { resetPassword } from '../Redux/Actions/Auth';
import { useDispatch } from 'react-redux';

const FormPasswordRecovery = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const [values, handleInputChange, reset] = useForm({
    email: '',
  });

  const { email } = values;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrorMessage('');
    setLoading(true);
    ReactGA.event({
      category: 'RECUPERAR CONTRASEÑA',
      action: 'Solicitar cambio de contraseña',
    });

    if (email.length === '') {
      setLoading(false);
      setShowErrorMessage('Por favor ingrese un correo válido.');
      return;
    }

    const resp = await dispatch(resetPassword(values));
    setLoading(false);

    if (resp.success) {
      history.push('/contrasena-verificada');
      reset();
    } else {
      setShowErrorMessage(resp.msg);
    }
  };

  return (
    <form
      className="content__form__passs__recovery mb-0"
      onSubmit={handleSubmit}
    >
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

      {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="buttons">
          <Button type="submit" isPrimary text="Enviar" />
        </div>
      )}
    </form>
  );
};

export default FormPasswordRecovery