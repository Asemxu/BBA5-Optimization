import React from 'react';
const  FormBabyRegister   = React.lazy( () => import( './FormBabyRegister'));
const  FormLogin   = React.lazy( () => import( './FormLogin'));
const  FormParentRegister   = React.lazy( () => import( './FormParentRegister'));
const  FormPasswordNew   = React.lazy( () => import( './FormPasswordNew'));
const  FormPasswordRecovery   = React.lazy( () => import( './FormPasswordRecovery'));

export {
  FormBabyRegister,
  FormParentRegister,
  FormLogin,
  FormPasswordRecovery,
  FormPasswordNew,
};
