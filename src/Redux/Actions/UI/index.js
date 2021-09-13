import { typesUi } from '../../Types/ui';

export const selectedMainButton = (isRegister) => ({
  type: typesUi.selectedRegisterBtn,
  payload: isRegister,
});

export const registerWith = (registerWith) => ({
  type: typesUi.registerWith,
  payload: registerWith,
});

/* avatar = {avatar, id} */
export const selectedAvatar = (avatar) => {
  return (dispatch) => {
    sessionStorage.setItem('avatar', JSON.stringify(avatar));
    dispatch(setAvatar(avatar));
  };
};
export const setAvatar = (avatar) => ({
  type: typesUi.selectedAvatar,
  payload: avatar,
});

export const toggleMenu = (isOpen) => ({
  type: typesUi.toggleMenu,
  payload: isOpen,
});

export const toggleModalInfo = (isOpen) => ({
  type: typesUi.toggleModalInfo,
  payload: isOpen,
});

export const toggleCheckTerms = (checked) => ({
  type: typesUi.toggleCheckTerms,
  payload: checked,
});

export const toggleCheckPolicy = (checked) => ({
  type: typesUi.toggleCheckPolicy,
  payload: checked,
});

export const toggleCheckProgramInkaClub = (checked) => ({
  type: typesUi.toggleCheckProgramInkaClub,
  payload: checked,
});
