import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LoginContainer = styled.div`
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  gap: 10;
  padding: 50px 60px 50px 60px;
  box-sizing: border-box;
  width: 368px;
  height: 329px;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6;
  padding: 0px;
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 7px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10;
  padding: 8px 10px 8px 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10;
  padding: 8px 10px 8px 10px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin-bottom: 20px;
  margin-top: 13px;
  border-radius: 4px;
  background: rgb(86, 94, 239);
`;

const RegisterLink = styled.div`
  width: 100%;
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
  a {
    color: rgba(148, 166, 190, 0.4);
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #999;
`;

const LoginPage = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <PageContainer>
      <LoginContainer>
        <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>

        <LoginForm onSubmit={handleSubmit}>
          {isSignUp && <Input type="name" placeholder="Имя" />}
          <Input type="email" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />

          <Button type="submit">
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </Button>
        </LoginForm>

        {!isSignUp && (
          <RegisterLink>
            Нужно зарегистрироваться?{" "}
            <Link to="/register">Регистрируйтесь здесь</Link>
          </RegisterLink>
        )}
        {isSignUp && (
          <RegisterLink>
            Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
          </RegisterLink>
        )}
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
