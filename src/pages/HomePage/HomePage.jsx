import React from "react";
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

const toUpperCase = (statusLower) => {
  return statusLower.toUpperCase();
};

const HomePage = ({ setIsAuth }) => {
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      <SMainFirst>
        <SMainContainer>
          <SMainBlock>
            <SMainContent>
              <SMainColumn>
                <Column status={toUpperCase("Без Статуса")} />
              </SMainColumn>
              <SMainColumn>
                <Column status={toUpperCase("Нужно сделать")} />
              </SMainColumn>
              <SMainColumn>
                <Column status={toUpperCase("В работе")} />
              </SMainColumn>
              <SMainColumn>
                <Column status={toUpperCase("Тестирование")} />
              </SMainColumn>
              <SMainColumn>
                <Column status={toUpperCase("Готово")} />
              </SMainColumn>
            </SMainContent>
          </SMainBlock>
        </SMainContainer>
        <Outlet />
      </SMainFirst>
    </>
  );
};

export default HomePage;
