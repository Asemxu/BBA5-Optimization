import { fetchNotToken } from '../../../Helpers/Bba5/api/fetch';
import { methodsApi } from '../../../Helpers/Bba5/api/methodsApi';
import { typesAuth } from '../../Types/auth';
import {
  clearInfoParent,
  getCharacters,
  getDrawDate,
  getInfoGame,
  getTops,
  validateBallots,
} from '../BBA5/information';

/* startLogin > payload: { isLogin, num } */
export const startLogin = (payload) => ({
  type: typesAuth.loggedIn,
  payload,
});

export const changeRegisterStep = (step) => ({
  type: typesAuth.registerStep,
  payload: step,
});

export const registerParent = (parent) => {
  return async () => {
    try {
      const resp = await fetchNotToken(
        methodsApi.registerParent,
        parent,
        'POST'
      );
      const body = await resp.json();
      // console.log('res-register-parent', body);
      if (body.status === 'success') {
        sessionStorage.setItem('uuid', body.user_id);
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;

        if (errors.name?.length > 0) {
          return { success: false, msg: errors.name[0] };
        } else if (errors.parent_dni?.length > 0) {
          return { success: false, msg: errors.parent_dni[0] };
        } else if (errors.parent_cellphone?.length > 0) {
          return { success: false, msg: errors.parent_cellphone[0] };
        } else if (errors.email?.length > 0) {
          return { success: false, msg: errors.email[0] };
        } else if (errors.password?.length > 0) {
          return { success: false, msg: errors.password[0] };
        } else if (errors.city_id?.length > 0) {
          return { success: false, msg: errors.city_id[0] };
        } else if (errors.parent_birthday_d?.length > 0) {
          return { success: false, msg: errors.parent_birthday_d[0] };
        } else if (errors.parent_birthday_m?.length > 0) {
          return { success: false, msg: errors.parent_birthday_m[0] };
        } else if (errors.parent_birthday_y?.length > 0) {
          return { success: false, msg: errors.parent_birthday_y[0] };
        }
      } else if (body.message) {
        return { success: false, msg: body.message };
      }
    } catch (error) {
      console.error(error);
      return { success: false, msg: 'Por favor vuelva a intentarlo' };
    }
  };
};

export const editParent = (parent) => {
  return async () => {
    try {
      const user_id = sessionStorage.getItem('uuid');
      const resp = await fetchNotToken(
        methodsApi.editParent,
        { ...parent, user_id },
        'POST'
      );
      const body = await resp.json();
      // console.log('edit-parent', body);
      if (body.status === 'success') {
        sessionStorage.setItem('uuid', body.user_id);
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;

        if (errors.name?.length > 0) {
          return { success: false, msg: errors.name[0] };
        } else if (errors.type_doc?.length > 0) {
          return { success: false, msg: errors.type_doc[0] };
        } else if (errors.parent_document?.length > 0) {
          return { success: false, msg: errors.parent_document[0] };
        } else if (errors.parent_cellphone?.length > 0) {
          return { success: false, msg: errors.parent_cellphone[0] };
        } else if (errors.email?.length > 0) {
          return { success: false, msg: errors.email[0] };
        } else if (errors.password?.length > 0) {
          return { success: false, msg: errors.password[0] };
        } else if (errors.city_id?.length > 0) {
          return { success: false, msg: errors.city_id[0] };
        } else if (errors.parent_birthday_d?.length > 0) {
          return { success: false, msg: errors.parent_birthday_d[0] };
        } else if (errors.parent_birthday_m?.length > 0) {
          return { success: false, msg: errors.parent_birthday_m[0] };
        } else if (errors.parent_birthday_y?.length > 0) {
          return { success: false, msg: errors.parent_birthday_y[0] };
        }
      } else if (body.message) {
        return { success: false, msg: body.message };
      }
    } catch (error) {
      console.error(error);
      return { success: false, msg: 'Por favor vuelva a intentarlo' };
    }
  };
};

export const registerBaby = (baby) => {
  return async (dispatch) => {
    try {
      const user_id = Number(sessionStorage.getItem('uuid'));
      const resp = await fetchNotToken(
        methodsApi.registerBaby,
        {
          ...baby,
          user_id,
        },
        'POST'
      );
      const body = await resp.json();
      // console.log('res-register-baby', body);
      if (body.status === 'success') {
        sessionStorage.setItem('token', body.login.token);
        sessionStorage.setItem('code', body.login.reference_code);
        sessionStorage.removeItem('parent-info');
        sessionStorage.removeItem('baby-info');
        sessionStorage.removeItem('user');
        dispatch(getCharacters());
        dispatch(getDrawDate());
        dispatch(getTops());
        dispatch(validateBallots());
        dispatch(getInfoGame());
        dispatch(clearInfoParent());
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;

        if (errors.baby_name?.length > 0) {
          return { success: false, msg: errors.baby_name[0] };
        } else if (errors.baby_gender?.length > 0) {
          return { success: false, msg: errors.baby_gender[0] };
        } else if (errors.baby_birthday_d?.length > 0) {
          return { success: false, msg: errors.baby_birthday_d[0] };
        } else if (errors.baby_birthday_m?.length > 0) {
          return { success: false, msg: errors.baby_birthday_m[0] };
        } else if (errors.baby_birthday_y?.length > 0) {
          return { success: false, msg: errors.baby_birthday_y[0] };
        } else if (errors.terms_and_conditions?.length > 0) {
          return { success: false, msg: errors.terms_and_conditions[0] };
        } else if (errors.privacy_policies?.length > 0) {
          return { success: false, msg: errors.privacy_policies[0] };
        } else if (errors.additional?.length > 0) {
          return { success: false, msg: errors.additional[0] };
        } else if (body.message) {
          return { success: false, msg: body.message };
        }
      }
    } catch (error) {
      console.error(error);
      return { success: false, msg: 'Por favor vuelva a intentarlo' };
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const resp = await fetchNotToken(
        methodsApi.login,
        {
          ...data,
          name: 'desktop',
        },
        'POST'
      );
      const body = await resp.json();
      // console.log('logeado', body);
      if (body.status === 'success') {
        sessionStorage.setItem('uuid', body.id);
        sessionStorage.setItem('token', body.token);
        sessionStorage.setItem('code', body.reference_code);
        dispatch(getCharacters());
        dispatch(getDrawDate());
        dispatch(getTops());
        dispatch(validateBallots());
        dispatch(getInfoGame());
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;
        if (errors.email?.length > 0) {
          return { success: false, msg: errors.email[0] };
        } else if (errors.password?.length > 0) {
          return { success: false, msg: errors.password[0] };
        }
      } else if (body.message) {
        return { success: false, msg: body.message };
      }
    } catch (error) {
      return { success: false, msg: 'Por favor vuelva a intentarlo.' };
    }
  };
};

export const resetPassword = (email) => {
  return async () => {
    try {
      const resp = await fetchNotToken(methodsApi.resetPassword, email, 'POST');
      const body = await resp.json();
      // console.log('reset-password', body);
      if (body.status === 'success') {
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;
        if (errors.email?.length > 0) {
          return { success: false, msg: errors.email[0] };
        }
      }
    } catch (error) {
      return { success: false, msg: 'Por favor vuelva a intentarlo.' };
    }
  };
};

export const changePassword = (data) => {
  return async () => {
    try {
      const resp = await fetchNotToken(methodsApi.changePassword, data, 'POST');
      const body = await resp.json();
      // console.log('change-password', body);
      if (body.status === 'success') {
        return { success: true };
      } else if (body.errors) {
        const { errors } = body;
        if (errors.password?.length > 0) {
          return { success: false, msg: errors.password[0] };
        }
      }
      if (body.message && body.status === 'error') {
        return { success: false, msg: body.message };
      }
    } catch (error) {
      return { success: false, msg: 'Por favor vuelva a intentarlo.' };
    }
  };
};

export const validateEmail = (email) => {
  return async () => {
    try {
      const resp = await fetchNotToken(
        methodsApi.validateEmail,
        { email },
        'POST'
      );
      const body = await resp.json();

      if (body.status === 'success') {
        return { success: true };
      } else if (body.status === 'error') {
        return {
          success: false,
          msg: 'Mami al parecer ya te registraste con este correo, elige la opción iniciar sesión',
        };
      }
    } catch (error) {
      return { success: false, msg: 'Por favor vuelva a intentarlo.' };
    }
  };
};
