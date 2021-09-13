export const isNumber = ({ number, return_num = false }) => {
  if (isNaN(number)) {
    return { success: false };
  } else if (
    Math.sign(number) === -1 ||
    Math.sign(number) === 0 ||
    Math.sign(number) === -0
  ) {
    return { success: false };
  } else if (return_num === false) {
    return { success: true };
  } else if (return_num === true) {
    return { success: true, num: Number(number) };
  }
};

export const isValidateEmail = (email) => {
  const res =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
};
