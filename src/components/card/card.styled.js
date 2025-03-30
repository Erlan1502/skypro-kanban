import styled from "styled-components";

const themeColors = {
  orange: "#FFE4C2",
  purple: "#E9D4FF",
  green: "#B4FDD1",
};

const ThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  min-height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 13px 19px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTheme = styled.div`
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $color }) => themeColors[$color] || "#EEE"};
  p {
    color: ${({ $color }) =>
      $color === "orange"
        ? "#FF6D00"
        : $color === "purple"
        ? "#9A48F1"
        : "#06B16E"};
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
