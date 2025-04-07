import React from "react";
import { NotFoundContainer } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h2>404 - Страница не найдена</h2>
      <p>Страница которую вы ищите - несуществует.</p>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
