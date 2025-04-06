import React from "react";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Карточка</h2>
      <p>ID карточки: {id}</p>
    </>
  );
};

export default CardPage;
