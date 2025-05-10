import React, { useEffect, useContext } from "react";
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
import PopNewCard from "../../components/popups/popNewCard/popNewCard.jsx";
import { getTasks } from "../../services/tasks";
import { TaskContext } from "../../context/taskContext/TaskContext.js";

const HomePage = () => {
  const {
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
  } = useContext(TaskContext);

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
  }, [setTasks, setIsLoading]);

  return (
    <>
      <Header onAddTask={() => setIsPopNewCardOpen(true)} />

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
