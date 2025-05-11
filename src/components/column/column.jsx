import React from "react";
import { Card } from "../card/card.jsx";
import {
  SCards,
  SColumnTitle,
  SColumnTitleParagraph,
} from "./column.styled.js";

const Column = ({ status, isLoading, tasks }) => {
  return (
    <SColumnTitle>
      <SColumnTitleParagraph>
        <p>{status}</p>
      </SColumnTitleParagraph>
      <SCards>
        {isLoading ? (
          <div>Данные загружаются...</div>
        ) : (
          tasks.map((card) => {
            return (
              <Card
                key={card._id}
                id={card._id}
                theme={card.topic}
                date={card.date}
                status={card.status}
                title={card.title} //Удалили проброс в связи с использованием ContextAPI
              />
            );
          })
        )}
      </SCards>
    </SColumnTitle>
  );
};

export { Column };
