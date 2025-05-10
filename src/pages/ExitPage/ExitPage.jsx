import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ExitOverlay,
  ExitContainer,
  ExitQuestion,
  ButtonGroup,
  ConfirmButton,
  CancelButton,
} from "./ExitPage.styled.js";
import { AuthContext } from "../../context/authContext/AuthContext.js";

const ExitPage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <ExitOverlay>
      <ExitContainer>
        <ExitQuestion>Выйти из аккаунта?</ExitQuestion>
        <ButtonGroup>
          <ConfirmButton onClick={handleLogout}>Да, выйти</ConfirmButton>
          <CancelButton onClick={handleCancel}>Нет, остаться</CancelButton>
        </ButtonGroup>
      </ExitContainer>
    </ExitOverlay>
  );
};

export default ExitPage;
