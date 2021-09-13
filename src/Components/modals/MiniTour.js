import ReactGA from 'react-ga';
import { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Components/Buttons';

import {
  brightBaby,
  cuttedBaby,
  cuttedBabyLeft,
} from '../../Images/Decorations/Baby';
import { btnMenu } from '../../Images/Decorations/Buttons';
import { Stars } from '../../Images/Decorations/Aditionals';

import { customModalStyles } from '../../Helpers/UI';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegisterStep } from '../../Redux/Actions/Auth';

const MiniTour = () => {
  const {
    logged: { registerStep },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(true);
  const history = useHistory();

  const customStyles = customModalStyles;

  customStyles.content = {
    ...customStyles.content,
    ...{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  const changeStep = (step) => {
    let action = '';
    if (step === 3) {
      action = '¡Felicidades, Mami! (SIGUIENTE)';
    } else if (step === 4) {
      action = 'Instrucción de Menu (SIGUIENTE)';
    }
    ReactGA.event({
      category: 'TUTORIAL AL REGISTRARSE',
      action,
    });
    dispatch(changeRegisterStep(step));
  };

  const closeModal = () => {
    ReactGA.event({
      category: 'TUTORIAL AL REGISTRARSE',
      action: 'Instrucción de Agregar boleta  (SIGUIENTE)',
    });
    setOpenModal(false);
    changeStep(5);
    history.push('/usuario/personajes');
  };
  return (
    <Modal isOpen={openModal} contentLabel="Example Modal" style={customStyles}>
      {registerStep === 2 && (
        <div className="modal-minitour-account">
          <img
            src={Stars}
            alt="Estrellas"
            title="Estrellas"
            className="animate__animated animate__heartBeat"
          />
          <h3 className="modal-minitour-account-title">¡Felicidades, mami!</h3>
          <img
            src={brightBaby}
            width="100%"
            alt="Baby"
            title="Baby"
            className="animate__animated animate__pulse"
          />
          <h3 className="modal-minitour-Desc mt-3">
            Tu cuenta ha sido creada con éxito
          </h3>
          <Button isPrimary text="Siguiente" onClick={() => changeStep(3)} />
        </div>
      )}
      {registerStep === 3 && (
        <div className="modal-minitour-menu">
          <div className="resplandor">
            <img
              src={btnMenu}
              alt="Menu"
              title="Menu"
              className="modal-minitour-menu-icon"
            />
          </div>
          <div className="modal-minitour-menu-content">
            <h3>
              A través del menu podrás acceder al Ranking las fechas de los
              sorteos semanales y tus códigos ingresados
            </h3>
            <img
              src={cuttedBaby}
              width="50%"
              alt="Baby"
              title="Baby"
              className="modal-minitour-menu-baby animate__animated animate__pulse"
            />
          </div>
          <Button isPrimary text="Siguiente" onClick={() => changeStep(4)} />
        </div>
      )}

      {registerStep === 4 && (
        <div className="modal-minitour-boleta">
          <div className="modal-minitour-boleta-content">
            <img
              src={cuttedBabyLeft}
              width="50%"
              alt="Baby"
              title="Baby"
              className="modal-minitour-boleta-baby animate__animated animate__pulse"
            />
            <h3>¡También podrás agregar el código de tus boletas!</h3>
          </div>
          <div className="resplandor animate__animated animate__pulse">
            <Button text="Agregar boleta" staticBtn />
          </div>
          <Button isPrimary text="Siguiente" onClick={closeModal} />
        </div>
      )}
    </Modal>
  );
};

export default MiniTour;
