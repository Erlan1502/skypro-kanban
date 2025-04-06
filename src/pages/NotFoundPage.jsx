import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h2>404 - Страница не найдена</h2>
      <p>Страница которую вы ищите - несуществует.</p>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
