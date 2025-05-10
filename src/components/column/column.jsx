import React from "react";
import { Card } from "../card/card.jsx";
import {
  SCards,
  SColumnTitle,
  SColumnTitleParagraph,
} from "./column.styled.js";

const Column = ({ status, isLoading, tasks, onTaskDeleted, onTaskUpdated }) => {
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
                title={card.title}
                onTaskDeleted={onTaskDeleted} //проброс в кардс
                onTaskUpdated={onTaskUpdated} //проброс в кардс
              />
            );
          })
        )}
      </SCards>
    </SColumnTitle>
  );
};

export { Column };
