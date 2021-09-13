import React , { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


// const {
//   PageAccounts,
//   PageBabyRegister,
//   PageMain,
//   PageLogin,
//   PageParentRegister,
//   PagePasswordNew,
//   PagePasswordRecovery,
//   PageVerifyEmail,
//   PageRecoveryConfirm,
// } = lazy( ()=>import('../Pages/Publics'));
const   PageMain  = lazy (() => import('../Pages/Publics/PageMain'))
const   PageAccounts  = lazy (() => import('../Pages/Publics/PageAccounts'))
const   PageBabyRegister  = lazy (() => import('../Pages/Publics/PageBabyRegister'))
const   PageLogin  = lazy (() => import('../Pages/Publics/PageLogin'))
const   PageParentRegister  = lazy (() => import('../Pages/Publics/PageParentRegister'))
const   PagePasswordNew  = lazy (() => import('../Pages/Publics/PagePasswordNew'))
const   PagePasswordRecovery  = lazy (() => import('../Pages/Publics/PagePasswordRecovery'))
const   PageVerifyEmail  = lazy (() => import('../Pages/Publics/PageVerifyEmail'))
const   PageRecoveryConfirm  = lazy (() => import('../Pages/Publics/PageRecoveryConfirm'))
const   PagePrivacyPolicy  = lazy (() => import('../Pages/Legacy/PagePrivacyPolicy'))
const   PageTermsConditions  = lazy (() => import('../Pages/Legacy/PageTermsConditions'))
const   PageInkaclubProgramme  = lazy (() => import('../Pages/Legacy/PageInkaclubProgramme'))
export const Publics = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
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
    </React.Suspense>
  );
};
