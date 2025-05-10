import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserButton,
} from "./header.styled.js";
import PopUser from "../popups/popUser/popUser.jsx";

const Header = ({ onAddTask }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { name } = userData;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <Logo>
            <a href="" target="_self" rel="noopener noreferrer">
              <img src="/logo.png" alt="logo" />
            </a>
          </Logo>
          <Nav>
            <MainButton onClick={onAddTask}>Создать новую задачу</MainButton>
            <UserButton onClick={() => setIsPopUpVisible(!isPopUpVisible)}>
              {name}
            </UserButton>
            <PopUser $isVisible={isPopUpVisible} />
          </Nav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
