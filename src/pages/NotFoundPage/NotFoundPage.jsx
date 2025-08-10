import React from 'react';
import Header from '../../components/header/header';
import {
  NotFoundWrapper,
  NotFoundContent,
  ErrorCode,
  ErrorMessage,
  ErrorDescription,
  HomeButton,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Header />
      <NotFoundContent>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Страница не найдена</ErrorMessage>
        <ErrorDescription>
          Возможно, страница была удалена или вы ввели неправильный адрес.
        </ErrorDescription>
        <HomeButton to="/">Вернуться на главную</HomeButton>
      </NotFoundContent>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
