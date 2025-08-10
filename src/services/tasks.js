import axios from "axios";
const API_URL = "https://wedev-api.sky.pro/api";

export async function getTasks() {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo.token;
    const response = await axios.get(API_URL + "/kanban", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function getTaskById(id) {
  try {
    const response = await axios.get(`${API_URL}/kanban/${id}`);
    return response.data.task;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Задача не найдена");
    }
    throw new Error(
      error.response?.data?.error || "Ошибка при получении задачи"
    );
  }
}

export async function createTask(taskData) {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo.token;

    const response = await axios.post(API_URL + "/kanban", taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
export async function updateTask(id, updatedData) {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;
    const response = await axios.put(`${API_URL}/kanban/${id}`, updatedData, {
      headers: {
        "Content-Type": "",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function deleteTask(id) {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    if (!token) {
      throw new Error("Токен авторизации отсутствует");
    }

    const response = await axios.delete(`${API_URL}/kanban/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Ошибка при удалении задачи"
    );
  }
}
