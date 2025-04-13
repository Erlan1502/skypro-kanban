import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  LoginContainer,
  Title,
  LoginForm,
  Input,
  Button,
  RegisterLink,
} from "./LoginPage.styled.js";

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
