import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  LoginContainer,
  Title,
  LoginForm,
  Button,
  RegisterLink,
  ErrorDiv,
} from "./LoginPage.styled.js";
import { useState } from "react";
import { signIn, signUp } from "../../services/auth.js";
import BaseInput from "../../components/baseInput/BaseInput.jsx";

const LoginPage = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    if (isSignUp && !formData.login.trim()) {
      newErrors.login = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    if (isSignUp && !formData.password.trim()) {
      newErrors.password = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }
    if (!isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
      isValid = false;
    }

    if (!isSignUp && !formData.login.trim()) {
      newErrors.login = true;
      setError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
      isValid = false;
    }

    if (!isSignUp && !formData.password.trim()) {
      newErrors.password = true;
      setError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <PageContainer>
      <LoginContainer>
        <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>

        <LoginForm onSubmit={handleSubmit}>
          {isSignUp && (
            <BaseInput
              error={errors.name}
              type="text"
              name="name"
              id="formname"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <BaseInput
            error={errors.login}
            type="text"
            name="login"
            id="formlogin"
            placeholder="Эл. почта"
            value={formData.login}
            onChange={handleChange}
          />
          <BaseInput
            error={errors.password}
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
          />
          <ErrorDiv>{error}</ErrorDiv>

          <Button type="secondary" data-fullwidth={true}>
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
