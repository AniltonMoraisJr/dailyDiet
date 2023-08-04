import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

type LabelProps = {
  hasError: boolean;
};

export const Label = styled.Text<LabelProps>`
  ${({ theme, hasError }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${hasError ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_1};
  `}
`;

export type SelectButtonType = "positive" | "negative";

type SelectButtonProps = {
  type: SelectButtonType;
  isSelected?: boolean;
};

export const SelectButton = styled.TouchableOpacity<SelectButtonProps>`
  width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
  ${({ theme, isSelected, type }) => css`
    background-color: ${isSelected && type === "positive"
      ? theme.COLORS.GREEN_LIGHT
      : isSelected && type === "negative"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border: ${!isSelected
      ? "none"
      : isSelected && type === "positive"
      ? `1px solid ${theme.COLORS.GREEN_DARK}`
      : `1px solid ${theme.COLORS.RED_DARK}`};
  `}
  border-radius: 6px;
`;

export const SelectButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

type CircleProps = {
  type: SelectButtonType;
};

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 100%;
  background: ${({ theme, type }) =>
    type === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
