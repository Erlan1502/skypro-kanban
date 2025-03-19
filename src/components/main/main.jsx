import React from "react";
import { Column } from "../column/column.jsx";
import { SMain } from "./main.styled.js";

const Main = () => {
  return (
    <SMain className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column status={toUpperCase("Без Статуса")} />
            <Column status={toUpperCase("Нужно сделать")} />
            <Column status={toUpperCase("В работе")} />
            <Column status={toUpperCase("Тестирование")} />
            <Column status={toUpperCase("Готово")} />
          </div>
        </div>
      </div>
    </SMain>
  );
};

export default Main;

const toUpperCase = (statusLower) => {
  return statusLower.toUpperCase();
};
