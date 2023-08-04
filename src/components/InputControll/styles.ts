import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  display: flex;
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

type InputProps = {
  isFilled: boolean;
  hasError: boolean;
};

export const Input = styled(TextInput)<InputProps>`
  padding: 14px;
  ${({ theme, hasError, isFilled }) => css`
    border: 1px solid
      ${hasError
        ? theme.COLORS.RED_DARK
        : isFilled
        ? theme.COLORS.GRAY_3
        : theme.COLORS.GRAY_5};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  border-radius: 6px;
`;
