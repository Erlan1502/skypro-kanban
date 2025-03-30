import React from "react";
import { Column } from "../column/column.jsx";
import {
  SMainBlock,
  SMainContent,
  SMainFirst,
  SMainColumn,
} from "./main.styled.js";

const Main = () => {
  return (
    <SMainFirst>
      <div className="container">
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
      </div>
    </SMainFirst>
  );
};

export default Main;

const toUpperCase = (statusLower) => {
  return statusLower.toUpperCase();
};
