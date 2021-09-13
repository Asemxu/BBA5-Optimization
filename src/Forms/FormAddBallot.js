import { Fragment, useState } from 'react';
import ReactGA from 'react-ga';
import { Button } from '../Components/Buttons';
import { btnInkafarma, btnMifarma } from '../Images/Decorations/Buttons';
import { Inkafarma, MiFarma } from '../Images/Pharmacies';
import { typesPharmacies } from '../types/bba5/typesPharmacies';
import { Spinner } from '../Components/Spinner';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { useBallots } from '../Hooks/useBallots';

const FormAddBallot = () => {
  const [activated, setActivated] = useState('');
  const [ballot, setBallot] = useState('');
  const { activateBallot, errorMsg, isLoading } = useBallots();

  const selectedPharmacies = (pharmacy) => {
    ReactGA.event({
      category: 'AGREGAR BOLETA',
      action: 'Boleta seleccionada: ' + pharmacy,
    });
    setActivated(pharmacy);
  };

  return (
    <Fragment>
      <div
        className={`content__body px-2 mt-1 ${activated === '' ? 'mb-5' : ''}`}
      >
        <div
          className={`imgs__pharmacies ${
            activated !== '' ? 'img__activated' : ''
          }`}
        >
          {(activated === '' || activated === typesPharmacies.inkafarma) && (
            <img
              src={Inkafarma}
              alt="Boleta Inkafarma"
              title="Boleta Inkafarma"
              className={`${
                activated === typesPharmacies.inkafarma ? 'activated' : ''
              } animate__animated animate__headShake animate__slow`}
            />
          )}

          {(activated === '' || activated === typesPharmacies.mifarma) && (
            <img
              src={MiFarma}
              alt="Boleta Mi Farma"
              title="Boleta Mi Farma"
              className={`animate__animated animate__headShake animate__slow ${
                activated === typesPharmacies.mifarma ? 'activated' : ''
              }`}
            />
          )}
        </div>
        <div className="content__description description__md my-3">
          <p className="text-center">
            Selecciona la farmacia en donde realizaste tu compra
          </p>
        </div>
        <div className="buttons__pharmacies my-3">
          <img
            src={btnInkafarma}
            alt="Botón Inkafarma"
            title="Botón Inkafarma"
            onClick={() => selectedPharmacies(typesPharmacies.inkafarma)}
            className={
              activated === typesPharmacies.inkafarma ? 'activated' : ''
            }
          />
          <img
            src={btnMifarma}
            alt="Botón Mi Farma"
            title="Botón Mi Farma"
            onClick={() => selectedPharmacies(typesPharmacies.mifarma)}
            className={activated === typesPharmacies.mifarma ? 'activated' : ''}
          />
        </div>

        {activated !== '' && (
          <div className="content__form pt-2 pb-0 px-4 px-lg-5">
            <div className="content__input">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Ingresa el código de tu boleta"
                onChange={(e) => setBallot(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      {errorMsg.length ? <ErrorMessage text={errorMsg} /> : null}

      {activated !== '' ? (
        !isLoading ? (
          <div className="buttons mb-4">
            <Button
              isPrimary
              text="Activar Boleta"
              onClick={() => activateBallot(ballot, activated)}
            />
          </div>
        ) : (
          <Spinner />
        )
      ) : null}
    </Fragment>
  );
};

export default FormAddBallot