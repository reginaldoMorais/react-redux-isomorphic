import axios from 'axios';

export const alerts = () => {
  const request = axios.get(`http://localhost:8089/message`).catch(error => {
    console.error(error);
  });

  return {
    type: 'ALERT',
    payload: request
  };
};
