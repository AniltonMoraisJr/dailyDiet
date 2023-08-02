import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Input = styled(TextInput)`
  width: 100%;
  padding: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  border-radius: 6px;
`;
