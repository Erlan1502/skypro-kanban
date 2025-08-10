import styled, { keyframes } from 'styled-components';
import { CardWrapper } from '../card/card.styled';

const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const LoadingCardElement = styled.div`
  animation: ${shimmer} 1.5s linear infinite;
  background: linear-gradient(
    90deg,
    rgba(193.25848388671875, 204.71737670898438, 219.99583435058594, 1),
    rgba(233.0180206298828, 237.53041076660156, 246.55517578125, 1) 46%,
    rgba(193, 205, 220, 1) 97%
  );
  background-size: 220px 130px;
`;

export const LoadingCardWrapper = styled(CardWrapper)`
  padding: 15px;
`;

export const LoadingCardTheme = styled(LoadingCardElement)`
  width: 82px;
  height: 20px;
  border-radius: 18px;
`;

export const LoadingCardButton = styled(LoadingCardElement)`
  width: 18px;
  height: 4px;
`;

export const LoadingCardLine = styled(LoadingCardElement)`
  width: 113px;
  height: 13px;
  margin-bottom: 35px;
`;

export const LoadingCardLineShort = styled(LoadingCardElement)`
  width: 58px;
  height: 13px;
`;
1;
