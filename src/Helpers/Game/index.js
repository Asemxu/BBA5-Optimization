import { fetchWithToken } from '../Bba5/api/fetch';

export const game = () => {
  console.log('Prueba');
};
export const startGame = async () => {
  const personaje = { user_id: 10, personaje_id: 1 };
  const response = await fetchWithToken('/startGame', personaje, 'POST');
  const body = await response.json();

  localStorage.setItem('body2', JSON.stringify(body));
};

export const endGame = async () => {
  const personaje = { user_id: 5, personaje_id: 1 };
  const response = await fetchWithToken('/endGame', personaje, 'POST');
  const body = await response.json();
  console.log(body);
};
