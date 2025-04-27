import React, { useState, useEffect } from "react";
import { Column } from "../../components/column/column.jsx";
import {
  SMainFirst,
  SMainContainer,
  SMainBlock,
  SMainContent,
  SMainColumn,
} from "./HomePage.styled.js";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import PopNewCard from "../../components/popups/popNewCard/popNewCard.jsx"; // Импортируем компонент
import { getTasks } from "../../services/tasks"; // Импортируем API-функции

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
const HomePage = ({ setIsAuth }) => {
  const [tasks, setTasks] = useState([]);
  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Ошибка загрузки задач:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

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
    console.log(tasks);
  };
  const handleTaskUpdated = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };
  return (
    <>
      <Header
        onAddTask={() => setIsPopNewCardOpen(true)}
        setIsAuth={setIsAuth}
      />

      <SMainFirst>
        <SMainContainer>
          <SMainBlock>
            <SMainContent>
              {statuses.map((status) => (
                <SMainColumn key={status}>
                  <Column
                    status={status}
                    tasks={tasks.filter((task) => task.status === status)}
                    isLoading={isLoading}
                    onTaskDeleted={handleTaskDeleted}
                    onTaskUpdated={handleTaskUpdated}
                  />
                </SMainColumn>
              ))}
            </SMainContent>
          </SMainBlock>
        </SMainContainer>
        <Outlet />
      </SMainFirst>

      {isPopNewCardOpen && (
        <PopNewCard
          onClose={() => setIsPopNewCardOpen(false)}
          onTaskCreated={handleTaskCreated}
        />
      )}
    </>
  );
};

export default HomePage;
