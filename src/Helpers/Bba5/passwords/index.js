export const encryptPassword = (password) => {
  return window.btoa(unescape(encodeURIComponent(password)));
};

export const decryptPassword = (password) => {
  return decodeURIComponent(escape(window.atob(password)));
};
