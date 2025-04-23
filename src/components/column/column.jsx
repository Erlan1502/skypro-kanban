import React from "react";
import { Card } from "../card/card.jsx";
import {
  SCards,
  SColumnTitle,
  SColumnTitleParagraph,
} from "./column.styled.js";
import { useState, useEffect } from "react";
import { getTasks } from "../../services/tasks.js";

const Column = ({ status }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        const filteredCards = tasks.filter((card) => card.status === status);
        setCards(filteredCards);
        setIsLoading(false);
        console.log("Tasks fetched");
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [status]);

  return (
    <SColumnTitle>
      <SColumnTitleParagraph>
        <p>{status}</p>
      </SColumnTitleParagraph>
      <SCards>
        {isLoading ? (
          <div>Данные загружаются...</div>
        ) : (
          cards.map((card) => (
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
