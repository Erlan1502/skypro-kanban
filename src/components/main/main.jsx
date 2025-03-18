import React from "react";
import {
  ColumnWOStatus,
  ColumnNeedToBeDone,
  ColumnInWork,
  ColumnTesting,
  ColumnReady,
} from "../column/column.jsx";
import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <ColumnWOStatus title="Без статуса" />
            <ColumnNeedToBeDone title="Нужно сделать" />
            <ColumnInWork title="В работе" />
            <ColumnTesting title="Тестирование" />
            <ColumnReady title="Готово" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
