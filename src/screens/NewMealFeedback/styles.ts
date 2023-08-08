import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${(props) => props.theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;

  gap: 40px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

type TitleProps = {
  onDiet: boolean;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, onDiet }) => css`
    color: ${onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
