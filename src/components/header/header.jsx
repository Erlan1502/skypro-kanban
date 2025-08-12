import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserButton,
} from './header.styled.js';
import PopUser from '../popups/popUser/popUser.jsx';
import { useTheme } from 'styled-components';
const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userInfo')) || {};
  const { name } = userData;
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <Logo>
            <a href="" target="_self" rel="noopener noreferrer">
              <img src={theme.logoUrl} alt="logo" />
            </a>
          </Logo>
          <Nav>
            <MainButton as={Link} to="/card/new">
              Создать новую задачу
            </MainButton>
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
