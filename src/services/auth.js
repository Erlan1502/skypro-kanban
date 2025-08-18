import axios from 'axios';
const API_URL = 'https://wedev-api.sky.pro/api/user';

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + '/login', userData, {
      headers: {
        'Content-Type': '',
      },
    });
    return data.data.user;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error(
        'Не удалось подключиться к серверу. Проверьте ваше интернет-соединение.'
      );
    }
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return data.data.user;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error(
        'Не удалось подключиться к серверу. Проверьте ваше интернет-соединение.'
      );
    }
  }
}
