import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  PagePrivacyPolicy,
  PageTermsConditions,
  PageInkaclubProgramme,
} from '../Pages/Legacy';

import {
  PageAccounts,
  PageBabyRegister,
  PageLogin,
  PageMain,
  PageParentRegister,
  PagePasswordNew,
  PagePasswordRecovery,
  PageVerifyEmail,
  PageRecoveryConfirm,
} from '../Pages/Publics';

export const Publics = () => {
  return (
    <Switch>
      <Route exact path="/" component={PageMain} />
      <Route path="/code/:code" component={PageMain} />
      <Route path="/cuentas/:data" component={PageAccounts} />
      <Route path="/cuentas" component={PageAccounts} />

      <Route exact path="/registro-paso1" component={PageParentRegister} />
      <Route exact path="/registro-paso2" component={PageBabyRegister} />
      <Route
        exact
        path="/terminos-condiciones"
        component={PageTermsConditions}
      />
      <Route exact path="/politica-privacidad" component={PagePrivacyPolicy} />
      <Route
        exact
        path="/programa-inkaclub"
        component={PageInkaclubProgramme}
      />
      <Route exact path="/iniciar-sesion" component={PageLogin} />
      <Route exact path="/recuperar-cuenta" component={PagePasswordRecovery} />
      <Route
        exact
        path="/nueva-contrasena/:token"
        component={PagePasswordNew}
      />
      <Route exact path="/contrasena-verificada" component={PageVerifyEmail} />

      <Route
        exact
        path="/contraseña-recuperada"
        component={PageRecoveryConfirm}
      />

      <Redirect to="/usuario" />
    </Switch>
  );
};
