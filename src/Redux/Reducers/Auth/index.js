import { typesAuth } from '../../Types/auth';

/* 
  loggedIn: true (logeado) | false (no logeado)
  logged: 
    num 0 - Pantallas Publicas (usuario no logeado)
      registerStep 0 - Pantalla Personajes
      registerStep 1 - Pantalla Premios
      registerStep 2 - Pantalla Felicidades Mami
      registerStep 3 - Pantalla Instrucción Menu
      registerStep 4 - Pantalla Instrucción Código de Boleta 
      registerStep 5 - Pantalla Ocultando instrucciones de registro
    num 1 - Pantallas Privadas (usuario logeado)
*/

const initialState = {
  loggedIn: false,
  logged: {
    num: 0,
    registerStep: 5,
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesAuth.loggedIn:
      return {
        ...state,
        loggedIn: action.payload.isLogin,
        logged: {
          ...state.logged,
          num: action.payload.num,
        },
      };
    case typesAuth.registerStep:
      return {
        ...state,
        logged: {
          ...state.logged,
          registerStep: action.payload,
        },
      };

    default:
      return state;
  }
};
