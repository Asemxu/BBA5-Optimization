import ReactGA from 'react-ga';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { customModalStyles } from '../../Helpers/UI';
import { btnClose } from '../../Images/Decorations/Aditionals';
import { toggleMenu } from '../../Redux/Actions/UI';

const DrawerMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [animatedLeft, setAnimatedLeft] = useState(true);
  const {
    toggle: { menu },
  } = useSelector((state) => state.ui);

  const changePage = (url, item) => {
    let action = '';
    if (item === 'game') {
      action = 'Item Juego';
    } else if (item === 'ranking') {
      action = 'Item Ranking';
    } else if (item === 'adwards') {
      action = 'Item Sorteos y Premios';
    } else if (item === 'ballots') {
      action = 'Item Boletas';
    } else if (item === 'products') {
      action = 'Item Productos';
    } else if (item === 'share-game') {
      action = 'Item Compartir';
    }

    ReactGA.event({
      category: 'MENÚ',
      action,
    });

    setAnimatedLeft(false);
    setTimeout(() => {
      history.push(url);

      dispatch(toggleMenu(false));
      setAnimatedLeft(true);
    }, 900);
  };
  const closeModal = () => {
    setAnimatedLeft(false);
    setTimeout(() => {
      dispatch(toggleMenu(false));
      setAnimatedLeft(true);
    }, 900);
  };

  Modal.setAppElement('#root');

  return (
    <Modal isOpen={menu} style={customModalStyles}>
      <div
        className={`modal-drawermenu animate__animated ${
          animatedLeft ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'
        }`}
      >
        <div className="bg__bones">
          <header>
            {' '}
            <img
              src={btnClose}
              alt="Botón Cerrar"
              title="Botón Cerrar"
              onClick={closeModal}
            />{' '}
          </header>
          <ul>
            <li type="button" onClick={() => changePage('/usuario', 'game')}>
              JUEGO
            </li>
            <li
              type="button"
              onClick={() => changePage('/usuario/ranking', 'ranking')}
            >
              RANKING
            </li>

            <li
              type="button"
              onClick={() => changePage('/usuario/sorteo-premios', 'adwards')}
            >
              SORTEOS Y PREMIOS
            </li>
            <li
              type="button"
              onClick={() => changePage('/usuario/boletas', 'ballots')}
            >
              MIS BOLETAS
            </li>
            <li
              type="button"
              onClick={() => changePage('/usuario/productos', 'products')}
            >
              PRODUCTOS
            </li>
            <li
              type="button"
              onClick={() =>
                changePage('/usuario/compartir/?p=1', 'share-game')
              }
            >
              COMPARTIR JUEGO
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default DrawerMenu;
