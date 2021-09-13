import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';

import { fetchWithToken } from '../Helpers/Bba5/api/fetch';
import { validateBallots } from '../Redux/Actions/BBA5/information';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const useBallots = () => {
  const [ballots, setBallots] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetchWithToken('/showCode', {}, 'POST');

        const body = await resp.json();
        setIsloading(false);
        if (body.status === 'success') {
          setBallots(body.codes);
        }
      } catch (error) {}
    };
    getProducts();
  }, []);

  const activateBallot = async (ballotNum, activated) => {
    ReactGA.event({
      category: 'AGREGAR BOLETA',
      action: 'Activar Boleta',
    });

    try {
      setIsloading(true);
      setErrorMsg('');
      const resp = await fetchWithToken(
        '/storeCode',
        {
          code: ballotNum,
          company: activated.toUpperCase(),
        },
        'POST'
      );
      const respJson = await resp.json();
      setIsloading(false);
      if (respJson.status === 'success') {
        dispatch(validateBallots());
        ReactGA.event({
          category: 'AGREGAR BOLETA',
          action: 'Boleta Éxitosa',
        });
        return push('/usuario/boletas-agregada');
      } else if (respJson.errors) {
        if (respJson.errors.code) {
          setErrorMsg(respJson.errors.code[0]);
        } else if (respJson.errors.company) {
          setErrorMsg(respJson.errors.company[0]);
        }
      } else if (respJson.status === 'error' && respJson.message !== '') {
        setErrorMsg(respJson.message);
      }
    } catch (error) {}
  };

  return {
    ballots,
    isLoading,
    activateBallot,
    errorMsg,
  };
};
