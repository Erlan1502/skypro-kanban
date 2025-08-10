import React from 'react';
import { Card } from '../card/card.jsx';
import LoadingCard from '../loading/LoadingCard.jsx';
import {
  SCards,
  SColumnTitle,
  SColumnTitleParagraph,
} from './column.styled.js';

const Column = ({ status, isLoading, tasks }) => {
  return (
    <SColumnTitle>
      <SColumnTitleParagraph>
        <p>{status}</p>
      </SColumnTitleParagraph>
      <SCards>
        {isLoading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : tasks.length > 0 ? (
          tasks.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              theme={card.topic}
              date={card.date}
              status={card.status}
              title={card.title}
            />
          ))
        ) : (
          <p>Задач пока нет</p>
        )}
      </SCards>
    </SColumnTitle>
  );
};

export { Column };
