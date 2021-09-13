import Modal from 'react-modal';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Buttons';
import { customModalStyles } from '../../Helpers/UI';
import { toggleModalInfo } from '../../Redux/Actions/UI';

const Information = () => {
  const {
    toggle: { modalInfo },
  } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    ReactGA.event({
      category: 'PRINCIPAL',
      action: 'Leído modal ¡Mami, no lo olvides!',
    });
    dispatch(toggleModalInfo(false));
    history.push('/usuario/personajes');
  };

  return (
    <Modal
      isOpen={modalInfo}
      style={{
        ...customModalStyles,
        content: {
          ...customModalStyles.content,
          maxWidth: 420,
          justifyContent: 'center',
        },
      }}
    >
      <div className="wellcome d-flex flex-column">
        <div className="modal-informe">
          <h2>¡Mami, no lo olvides!</h2>
          <p>
            Para participar de nuestros sorteos semanales, debes ingresar tus
            boletas de compra antes de jugar.
          </p>
          <p>
            Si ingresas 3 boletas en la semana, iniciarás con 300 pts todas tus
            partidas de esa misma semana.
          </p>
          <Button text="¡Entendido!" onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
};

export default Information;
