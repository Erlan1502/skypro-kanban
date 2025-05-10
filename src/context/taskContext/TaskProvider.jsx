import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const handleTaskCreated = async (newTaskData) => {
    try {
      setTasks(newTaskData.tasks);
      setIsPopNewCardOpen(false);
    } catch (error) {
      console.error("Ошибка создания задачи:", error);
    }
  };

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task._id !== deletedTaskId));
  };

  const handleTaskUpdated = async (updatedTask) => {
    setTasks(
      tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  const value = {
    tasks,
    setTasks,
    isPopNewCardOpen,
    setIsPopNewCardOpen,
    isLoading,
    setIsLoading,
    statuses,
    handleTaskCreated,
    handleTaskDeleted,
    handleTaskUpdated,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
