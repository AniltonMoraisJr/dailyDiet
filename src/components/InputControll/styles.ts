import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
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
  flex: 1;
  padding: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
