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
  const userData = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { name, login } = userData;

  return (
    <PopUserContainer $isVisible={$isVisible}>
      <Name>{`${name}`}</Name>
      <Email>{`${login}`}</Email>
      <ThemeContainer>
        <ThemeText>Темная тема</ThemeText>
        <Checkbox name="checkbox" />
      </ThemeContainer>
      <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
