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
                <div
                  className="header__pop-user-set pop-user-set"
                  id="user-set-target"
                >
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button type="button" className="_hover03">
                    <a href="#popExit">Выйти</a>
                  </button>
                </div>
              </Popup>
            )}
          </Nav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
