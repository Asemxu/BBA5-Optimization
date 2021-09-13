import { decryptPassword } from '../Bba5/passwords';

export const getUserInformation = (registerWith) => {
  const sessionStorage_exists = sessionStorage.getItem('parent-info')
    ? true
    : false;

  if (!sessionStorage_exists) {
    return { success: sessionStorage_exists };
  } else if (registerWith === 1) {
    return {
      success: sessionStorage_exists,
      data: {
        ...JSON.parse(sessionStorage.getItem('parent-info')),
        password: decryptPassword(
          JSON.parse(sessionStorage.getItem('parent-info')).password
        ),
        password_confirmation: decryptPassword(
          JSON.parse(sessionStorage.getItem('parent-info'))
            .password_confirmation
        ),
      },
    };
  } else if (registerWith === 2) {
    return {
      success: sessionStorage_exists,
      data: {
        ...JSON.parse(sessionStorage.getItem('parent-info')),
      },
    };
  }
};
