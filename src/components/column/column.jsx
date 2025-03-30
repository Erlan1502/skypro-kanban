import React from "react";
import { Card } from "../card/card.jsx";
import {
  SCards,
  SColumnTitle,
  SColumnTitleParagraph,
} from "./column.styled.js";
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
    <SColumnTitle>
      <SColumnTitleParagraph>
        <p>{status}</p>
      </SColumnTitleParagraph>
      <SCards>
        {isLoading ? (
          <div>Данные загружаются...</div>
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
      </SCards>
    </SColumnTitle>
  );
};
export { Column };
