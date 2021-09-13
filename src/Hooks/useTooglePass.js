import { useState, useRef } from 'react';

export const useTooglePass = () => {
  const [showPass, setShowPass] = useState(false);
  const inputPassword = useRef(null);

  const togglePass = () => {
    setShowPass(!showPass);
    if (inputPassword.current.type === 'password') {
      inputPassword.current.type = 'text';
    } else {
      inputPassword.current.type = 'password';
    }
  };
  return {
    togglePass,
    showPass,
    inputPassword,
  };
};
