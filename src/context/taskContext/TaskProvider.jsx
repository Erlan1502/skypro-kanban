import { useState } from "react";
import { TaskContext } from "./TaskContext";
import { getTasks } from "../../services/tasks";
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

  const handleTaskDeleted = async (deletedTaskId) => {
    setTasks(tasks.filter((task) => task._id !== deletedTaskId));
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  const handleTaskUpdated = async (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
    setTasks(newTasks);
    const tasksData = await getTasks();
    setTasks(tasksData);
    console.log(newTasks);
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
    onTaskUpdate: handleTaskUpdated, // для удобства и чтобы не переименовывать всё
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
