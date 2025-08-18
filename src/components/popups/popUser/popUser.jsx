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
import { useTheme } from "../../../context/themeContext/themeProvider.jsx";

const PopUser = ({ $isVisible }) => {
  const navigate = useNavigate();
  const { themeName, toggleTheme } = useTheme();
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
        <Checkbox
          name="checkbox"
          checked={themeName === 'dark'}
          onChange={toggleTheme}
        />
      </ThemeContainer>
      <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
