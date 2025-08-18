import React, { useEffect, useContext } from 'react';
import { Column } from '../../components/column/column.jsx';
import {
  SMainFirst,
  SMainContainer,
  SMainBlock,
  SMainContent,
  SMainColumn,
  SmainColumnNotExisted,
} from './HomePage.styled.js';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.jsx';
import { getTasks } from '../../services/tasks';
import { TaskContext } from '../../context/taskContext/TaskContext.js';

const HomePage = () => {
  const {
    tasks,
    setTasks,
    isLoading,
    setIsLoading,
    statuses,
  } = useContext(TaskContext);

  useEffect(() => {
    setIsLoading(true); 
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Ошибка загрузки задач:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [setTasks, setIsLoading]);

  return (
    <>
      <Header />

      <SMainFirst>
        <SMainContainer>
          <SMainBlock>
            <SMainContent $isEmpty={!tasks || tasks.length === 0}>
              {isLoading ? (
                statuses.map((status) => (
                  <SMainColumn key={status}>
                    <Column
                      status={status}
                      tasks={[]}
                      isLoading={isLoading}
                    />
                  </SMainColumn>
                ))
              ) : tasks && tasks.length > 0 ? (
                statuses.map((status) => (
                  <SMainColumn key={status}>
                    <Column
                      status={status}
                      tasks={tasks.filter((task) => task.status === status)}
                      isLoading={isLoading}
                    />
                  </SMainColumn>
                ))
              ) : (
                <SmainColumnNotExisted>Задач пока нет...</SmainColumnNotExisted>
              )}
            </SMainContent>
          </SMainBlock>
        </SMainContainer>
        <Outlet />
      </SMainFirst>
    </>
  );
};

export default HomePage;
