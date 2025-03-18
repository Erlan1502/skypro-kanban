import React from "react";
import { Card } from "../card/card.jsx";
import "./column.css";
import { cardList } from "../../data.js";
import { useState, useEffect } from "react";

const ColumnWOStatus = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsWithoutStatus = cardList.filter(
    (card) => card.status === "БЕЗ СТАТУСА"
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          cardsWithoutStatus.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
const ColumnNeedToBeDone = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsNeedToBeDone = cardList.filter(
    (card) => card.status === "НУЖНО СДЕЛАТЬ"
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          cardsNeedToBeDone.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
const ColumnInWork = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsInWork = cardList.filter((card) => card.status === "В РАБОТЕ");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          cardsInWork.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
const ColumnTesting = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsTesting = cardList.filter(
    (card) => card.status === "ТЕСТИРОВАНИЕ"
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          cardsTesting.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
const ColumnReady = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsTesting = cardList.filter((card) => card.status === "ГОТОВО");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards card__title_finished">
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          cardsTesting.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
export {
  ColumnWOStatus,
  ColumnNeedToBeDone,
  ColumnInWork,
  ColumnTesting,
  ColumnReady,
};
