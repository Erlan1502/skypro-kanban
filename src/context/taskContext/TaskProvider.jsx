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

  const handleTaskCreated = async (createResponse) => {
    try {
      setTasks(createResponse.tasks);
      setIsPopNewCardOpen(false);
    } catch (error) {
      console.error("Ошибка обработки созданной задачи:", error);
    }
  };

  const handleTaskDeleted = async (deletedTaskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task._id !== deletedTaskId));
  };

  const handleTaskUpdated = async (updateResponse) => {
    setTasks(updateResponse.tasks);
  };

  const value = {
    tasks,
    setTasks,
    isPopNewCardOpen,
    setIsPopNewCardOpen,
    isLoading,
    setIsLoading,
    statuses,
    onTaskCreated: handleTaskCreated,
    onDelete: handleTaskDeleted,
    onTaskUpdate: handleTaskUpdated,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};