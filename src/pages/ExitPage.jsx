import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ExitOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ExitContainer = styled.div`
  width: 370px;
  padding: 50px 60px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExitQuestion = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 153px;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const ConfirmButton = styled(Button)`
  background: #565eef;
  color: white;
  border: none;
`;

const CancelButton = styled(Button)`
  background: white;
  color: #565eef;
  border: 0.7px solid #565eef;
`;

const ExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    if (typeof setIsAuth === "function") {
      setIsAuth(false);
    }
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
