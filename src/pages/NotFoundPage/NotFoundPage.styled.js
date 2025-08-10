import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const ErrorCode = styled.h1`
  font-size: 160px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
  line-height: 1;
`;

export const ErrorMessage = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const ErrorDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
  max-width: 400px;
`;

export const HomeButton = styled(Link)`
  height: 40px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
