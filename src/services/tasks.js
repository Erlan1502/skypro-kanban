import axios from 'axios';
const API_URL = 'https://wedev-api.sky.pro/api';
// ДОБАВЛЕНА ПРОВЕРКА СОЕДИНЕНИЯ
const handleRequestError = (error) => {
  if (error.response) {
    throw new Error(
      error.response.data.error || 'Произошла ошибка на сервере.'
    );
  } else {
    throw new Error(
      'Не удалось подключиться к серверу. Проверьте ваше интернет-соединение.'
    );
  }
};

export async function getTasks() {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo.token;
    const response = await axios.get(API_URL + '/kanban', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function createTask(taskData) {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo.token;
    const response = await axios.post(API_URL + '/kanban', taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function updateTask(id, updatedData) {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo?.token;
    const response = await axios.put(`${API_URL}/kanban/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function deleteTask(id) {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo?.token;
    if (!token) {
      throw new Error('Токен авторизации отсутствует');
    }
    const response = await axios.delete(`${API_URL}/kanban/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}
