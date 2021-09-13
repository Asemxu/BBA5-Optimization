import { typesUi } from '../../Types/ui';

/* 
  selected
    registerWith: 1 (registro con fb) | 0 (registro con correo)
*/

const defaultAvatar = {
  name: 'chase',
  id: 1,
  image2: 'https://www.bebeaventurero.com/back-end/public/img/chase2.png',
};

const initialState = {
  selected: {
    isRegisterBtn: '',
    registerWith: '',
    avatar: sessionStorage.getItem('avatar')
      ? JSON.parse(sessionStorage.getItem('avatar'))
      : defaultAvatar,
  },
  toggle: {
    menu: false,
    modalInfo: false,
  },
  checksRegister: {
    terms: false,
    policy: false,
    programInkaClub: false,
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesUi.loadingLogin:
      return {
        ...state,
        loading: {
          login: action.payload,
        },
      };
    case typesUi.selectedRegisterBtn:
      return {
        ...state,
        selected: {
          ...state.selected,
          isRegisterBtn: action.payload,
        },
      };
    case typesUi.registerWith:
      return {
        ...state,
        selected: {
          ...state.selected,
          registerWith: action.payload,
        },
      };
    case typesUi.selectedAvatar:
      return {
        ...state,
        selected: {
          ...state.selected,
          avatar: action.payload,
        },
      };
    case typesUi.toggleMenu:
      return {
        ...state,
        toggle: {
          ...state.toggle,
          menu: action.payload,
        },
      };
    case typesUi.toggleModalInfo:
      return {
        ...state,
        toggle: {
          ...state.toggle,
          modalInfo: action.payload,
        },
      };

    case typesUi.toggleCheckTerms:
      return {
        ...state,
        checksRegister: {
          ...state.checksRegister,
          terms: action.payload,
        },
      };
    case typesUi.toggleCheckPolicy:
      return {
        ...state,
        checksRegister: {
          ...state.checksRegister,
          policy: action.payload,
        },
      };
    case typesUi.toggleCheckProgramInkaClub:
      return {
        ...state,
        checksRegister: {
          ...state.checksRegister,
          programInkaClub: action.payload,
        },
      };

    default:
      return state;
  }
};
