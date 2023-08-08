import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const MealDateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealCardItem = styled.TouchableOpacity`
  padding: 14px 16px 14px 12px;

  border: 1px solid;
  border-color: ${(props) => props.theme.COLORS.GRAY_5};
  border-radius: 6px;

  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;

type CircleProps = {
  onDiet: boolean;
};

export const Circle = styled.View<CircleProps>`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  background: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
