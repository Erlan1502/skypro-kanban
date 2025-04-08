import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PopUserContainer,
  Name,
  Email,
  ThemeContainer,
  ThemeText,
  Checkbox,
  LogoutButton,
} from "./popUser.styled.js";

const PopUser = ({ $isVisible }) => {
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate("/exit");
  };

  return (
    <PopUserContainer $isVisible={$isVisible}>
      <Name>Ivan Ivanov</Name>
      <Email>ivan.ivanov@gmail.com</Email>
      <ThemeContainer>
        <ThemeText>Темная тема</ThemeText>
        <Checkbox name="checkbox" />
      </ThemeContainer>
      <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
