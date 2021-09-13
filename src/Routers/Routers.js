import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

import { Publics } from './Publics';
import { Privates } from './Privates';
import {
  getCharacters,
  getCities,
  getDrawDate,
  getInfoGame,
  getTops,
  getTypesDocuments,
  validateBallots,
} from '../Redux/Actions/BBA5/information';
import { startLogin } from '../Redux/Actions/Auth';
import ReactGA from 'react-ga';

const DrawerMenu = React.lazy(()=>import('../Components/modals'));

ReactGA.initialize('UA-205928464-1');

export const Routers = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getTypesDocuments());

    const isLogin =
      sessionStorage.getItem('token') && sessionStorage.getItem('uuid')
        ? true
        : false;
    dispatch(startLogin({ isLogin, num: 1 }));
    if (isLogin) {
      dispatch(getCharacters());
      dispatch(getDrawDate());
      dispatch(getTops());
      dispatch(validateBallots());

      dispatch(getInfoGame());
    }
  }, [dispatch]);

  return (
    <Router>
      <DrawerMenu />
      <div>
        <Switch>
          <PrivateRoutes
            path="/usuario"
            isAuthenticated={loggedIn}
            component={Privates}
          />
          <PublicRoutes
            path="/"
            isAuthenticated={loggedIn}
            component={Publics}
          />
        </Switch>
      </div>
    </Router>
  );
};
