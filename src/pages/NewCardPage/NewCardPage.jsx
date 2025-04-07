import React from "react";
import styled from "styled-components";

const NewCardContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NewCardPage = () => {
  return (
    <NewCardContainer>
      <h2>Создание новой карточки</h2>
    </NewCardContainer>
  );
};

export default NewCardPage;
