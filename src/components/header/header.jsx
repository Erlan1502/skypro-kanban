import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserButton,
  Popup,
} from "./header.styled.js";
import PopUser from "../popups/popUser/popUser.jsx";

const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

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
            <MainButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainButton>
            <UserButton href="#user-set-target" onClick={togglePopUp}>
              Ivan Ivanov
            </UserButton>
            {isPopUpVisible && (
              <Popup id="user-set-target">
                <PopUser />
              </Popup>
            )}
          </Nav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
