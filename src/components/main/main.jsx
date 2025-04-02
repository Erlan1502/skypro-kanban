import React from "react";
import { Column } from "../column/column.jsx";
import {
  SMainBlock,
  SMainContent,
  SMainFirst,
  SMainColumn,
  SMainContainer,
} from "./main.styled.js";

const Main = () => {
  return (
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
    </SMainFirst>
  );
};

export default Main;

const toUpperCase = (statusLower) => {
  return statusLower.toUpperCase();
};
