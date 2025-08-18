import styled, {css} from 'styled-components';

export const PopNewCardWrapper = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const commonInputStyles = css`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.colors.textPlaceholder};
    letter-spacing: -0.14px;
    color: rgba(148, 166, 190, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export const FormInput = styled.input`
  ${commonInputStyles}
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.text};
  border: 0.7px solid ${({ $error }) => ($error ? 'red' : 'rgba(148, 166, 190, 0.4)')};
`;

export const FormTextArea = styled.textarea`
  ${commonInputStyles}
  color: ${({ theme }) => theme.colors.text};
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  resize: none;
  border: 0.7px solid ${({ $error }) => ($error ? 'red' : 'rgba(148, 166, 190, 0.4)')};
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
  border: 0.7px solid ${({ $error }) => ($error ? 'red' : 'transparent')};
  border-radius: 8px;
  padding: 0px;
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DayNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &._weekend- {
    color: red; // Example for weekend
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  opacity: ${(props) => (props.$isOtherMonth ? '0' : '1')};
  font-weight: ${(props) => (props.$isCurrent ? '700' : '400')};
  background-color: ${(props) => (props.$isActive ? '#94a6be' : 'transparent')};
  color: ${(props) => (props.$isActive ? '#ffffff' : '#94a6be')};

  &:hover {
    background-color: ${(props) => (props.$isActive ? '#94a6be' : '#eaeef6')};
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;

export const CategoriesWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? '1' : '0.4')};
  background-color: ${(props) => props.$color};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${(props) => props.$textColor};
  }
`;
