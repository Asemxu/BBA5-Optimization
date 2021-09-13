import { typesInformation } from '../../Types/Bba5';

const initialStateFormParent = {
  name: '',
  type_doc: '',
  parent_document: '',
  parent_cellphone: '',
  email: '',
  password: '',
  password_confirmation: '',
  parent_birthday_d: '',
  parent_birthday_m: '',
  parent_birthday_y: '',
  city_id: '',
  type: '',
};

const initialStateFormBaby = {
  baby_name: '',
  baby_gender: '',
  baby_birthday_d: '',
  baby_birthday_m: '',
  baby_birthday_y: '',
};

const initialState = {
  cities: [],
  formParentRegister: initialStateFormParent,
  formParentBaby: initialStateFormBaby,
  typesDocs: [],
  characters: {
    loading: true,
    data: [],
  },
  drawerDates: {
    loading: true,
    data: [],
  },
  tops: {
    loading: true,
    list: [],
    my_top: [],
  },
  hasBallots: false,
  hasOpportunities: {
    is: false,
    loading: true,
  },
  countsBallots: {
    loading: true,
    count: '',
  },
};

export const informationReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesInformation.getCities:
      return {
        ...state,
        cities: action.payload,
      };

    case typesInformation.changeFormParent:
      return {
        ...state,
        formParentRegister: {
          ...state.formParentRegister,
          ...action.payload,
        },
      };
    case typesInformation.updateInfoBaby:
      return {
        ...state,
        formParentBaby: {
          ...state.formParentBaby,
          ...action.payload,
        },
      };

    case typesInformation.clearInfoParent:
      return {
        ...state,
        formParentRegister: initialStateFormParent,
      };

    case typesInformation.getTypesDocuments:
      return {
        ...state,
        typesDocs: action.payload,
      };

    case typesInformation.getCharacters:
      return {
        ...state,
        characters: {
          loading: false,
          data: action.payload,
        },
      };

    case typesInformation.getDrawdates:
      return {
        ...state,
        drawerDates: {
          loading: false,
          data: action.payload,
        },
      };
    case typesInformation.getTops:
      const { list, my_top } = action.payload;
      return {
        ...state,
        tops: {
          loading: false,
          list,
          my_top,
        },
      };
    case typesInformation.validateBallots:
      return {
        ...state,
        hasBallots: action.payload,
      };

    case typesInformation.validateOpportunities:
      return {
        ...state,
        hasOpportunities: {
          loading: false,
          is: action.payload,
        },
      };
    case typesInformation.validateCountsBallots:
      return {
        ...state,
        countsBallots: {
          loading: false,
          count: action.payload,
        },
      };
    case typesInformation.resetCountsBallots:
      return {
        ...state,
        countsBallots: {
          loading: true,
          count: '',
        },
      };
    default:
      return state;
  }
};
