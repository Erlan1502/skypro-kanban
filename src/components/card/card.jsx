import React, { useState } from "react";
import {
  CardWrapper,
  CardGroup,
  CardTheme,
  CardButton,
  CardTitle,
  CardContent,
  CardDate,
} from "./card.styled.js";
import { Link } from "react-router-dom";
import PopBrowse from "../popups/popBrowse/popBrowse.jsx";
import { deleteTask } from "../../services/tasks.js";

const Card = ({
  id,
  theme,
  title,
  date,
  status,
  onTaskDeleted,
  onTaskUpdated,
}) => {
  let themeColor = "";

  if (theme === "Web Design") {
    themeColor = "orange";
  } else if (theme === "Copywriting") {
    themeColor = "purple";
  } else if (theme === "Research") {
    themeColor = "green";
  }
  const [showCard, setShowCard] = useState(false);
  const handleDelete = async () => {
    try {
      await deleteTask(id);
      if (typeof onTaskDeleted === "function") {
        onTaskDeleted(id);
      }
      setShowCard(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  const handleChange = async (updatedTask) => {
    if (typeof onTaskUpdated === "function") {
      onTaskUpdated(updatedTask);
    }
    setShowCard(false);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  };
  return (
    <>
      <CardWrapper>
        <CardGroup>
          <CardTheme $color={themeColor}>
            <p>{theme}</p>
          </CardTheme>
          <CardButton onClick={() => setShowCard(true)}>
            <div></div>
            <div></div>
            <div></div>
          </CardButton>
        </CardGroup>
        <CardContent>
          <Link to={`/card/${id}`} target="_self" rel="noopener noreferrer">
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{formatDate(date)}</p>
          </CardDate>
        </CardContent>
      </CardWrapper>
      {showCard && (
        <PopBrowse
          theme={theme}
          title={title}
          status={status}
          id={id}
          onClose={() => setShowCard(false)}
          onDelete={handleDelete}
          onTaskUpdate={handleChange}
        />
      )}
    </>
  );
};
export { Card };
