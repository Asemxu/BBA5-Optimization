import { fetchNotToken, fetchWithToken } from '../../../Helpers/Bba5/api/fetch';
import { methodsApi } from '../../../Helpers/Bba5/api/methodsApi';
import { typesInformation } from '../../Types/Bba5';

export const getCities = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchNotToken(methodsApi.getCities);
      const body = await resp.json();
      if (body.length > 0) {
        const formatting = body.map(({ city, id }) => ({
          label: city,
          value: id,
        }));

        dispatch(setCities(formatting));
      }
    } catch (error) {}
  };
};

const setCities = (cities) => ({
  type: typesInformation.getCities,
  payload: cities,
});

export const setParentInfo = (info) => ({
  type: typesInformation.changeFormParent,
  payload: info,
});

export const setBabyInfo = (info) => ({
  type: typesInformation.updateInfoBaby,
  payload: info,
});

export const clearInfoParent = () => ({
  type: typesInformation.clearInfoParent,
});

export const getTypesDocuments = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchNotToken(methodsApi.types_documents);
      const body = await resp.json();
      if (body.length > 0) {
        const docs = body.map((doc) => {
          delete doc.created_at;
          delete doc.updated_at;
          return doc;
        });
        dispatch(setTypesDocuments(docs));
      }
    } catch (error) {}
  };
};

const setTypesDocuments = (documents) => ({
  type: typesInformation.getTypesDocuments,
  payload: documents,
});

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(methodsApi.characters);
      const body = await resp.json();
      if (body.length > 0) {
        const characters = body.map((character) => {
          delete character.created_at;
          delete character.updated_at;
          character.character = character.character.toLowerCase();
          return character;
        });
        dispatch(setCharacters(characters));
        return { success: true };
      }
    } catch (error) {}
  };
};

const setCharacters = (characters) => ({
  type: typesInformation.getCharacters,
  payload: characters,
});

export const getDrawDate = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchNotToken(methodsApi.sorteos);
      const body = await resp.json();
      if (body.length > 0) {
        dispatch(setDrawDates(body));
        return { success: true };
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const setDrawDates = (dates) => ({
  type: typesInformation.getDrawdates,
  payload: dates,
});

export const getTops = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(methodsApi.getTops, {}, 'POST');
      const body = await resp.json();

      if (body.status === 'success') {
        const { mytop, tops } = body;

        const list = [];
        for (let index = 0; index < 8; index++) {
          const position = index + 1;
          const defaultTop = {
            top: index + 1,
            name: '',
            points: '',
          };
          if (tops.length === 0) {
            list.push(defaultTop);
          } else {
            const searchTopIndex = tops.filter((t) => t.top === position);

            if (searchTopIndex.length > 0) {
              list.push(searchTopIndex[0]);
            } else {
              list.push(defaultTop);
            }
          }
        }

        dispatch(setTops({ list, my_top: mytop }));
      }
    } catch (error) {}
  };
};

const setTops = (tops) => ({
  type: typesInformation.getTops,
  payload: tops,
});

export const validateBallots = () => {
  return async (dispatch) => {
    const user_id = sessionStorage.getItem('uuid');
    try {
      const resp = await fetchWithToken(
        methodsApi.showCode,
        { user_id },
        'POST'
      );
      const body = await resp.json();
      if (body.status === 'success') {
        const { codes } = body;
        dispatch(setHasBallots(codes.length > 0));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const setHasBallots = (hasBallots) => ({
  type: typesInformation.validateBallots,
  payload: hasBallots,
});

export const getInfoGame = () => {
  return async (dispatch) => {
    try {
      const user_id = sessionStorage.getItem('uuid');
      const resp = await fetchWithToken('/remainingGame', { user_id }, 'POST');
      const body = await resp.json();

      if (body.status === 'success') {
        const { juegos_restantes, boletas } = body;
        dispatch(setHasOpportunity(juegos_restantes > 0));
        dispatch(setAddedBallots(boletas));
      } else if (body.status === 'error') {
        const { juegos_restantes, boletas } = body;
        dispatch(setHasOpportunity(juegos_restantes > 0));
        dispatch(setAddedBallots(boletas));
      }
    } catch (error) {
      console.error('error', error);
    }
  };
};

export const setHasOpportunity = (hasOpportunity) => ({
  type: typesInformation.validateOpportunities,
  payload: hasOpportunity,
});

export const setAddedBallots = (count) => ({
  type: typesInformation.validateCountsBallots,
  payload: count,
});

export const setResetAddedBallots = () => ({
  type: typesInformation.resetCountsBallots,
});
