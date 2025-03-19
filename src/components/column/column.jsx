import React from "react";
import { Card } from "../card/card.jsx";
import { SColumn } from "./column.styled.js";
import { cardList } from "../../data.js";
import { useState, useEffect } from "react";

const Column = ({ status }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsWithoutStatus = cardList.filter((card) => card.status === status);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <SColumn className="main__column">
      <div className="column__title">
        <p>{status}</p>
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
              date={card.date}
              status={card.status}
              title={card.title}
            />
          ))
        )}
      </div>
    </SColumn>
  );
};
export { Column };
