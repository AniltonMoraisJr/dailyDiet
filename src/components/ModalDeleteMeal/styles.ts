import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  opacity: 0.25;
`;

export const CustomAlertDialog = styled.View`
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;

  max-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;
`;

export const CustomAlertDialogTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
