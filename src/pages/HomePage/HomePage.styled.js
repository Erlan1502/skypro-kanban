import styled from 'styled-components';

export const SMainFirst = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;
export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;
export const SMainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: ${(props) => (props.$isEmpty ? 'center' : 'space-between')};
`;
export const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;
export const SMainContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
export const SmainColumnNotExisted = styled.div`
  font-size: 24px;
`;
