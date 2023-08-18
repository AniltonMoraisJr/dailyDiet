import styled, { css } from "styled-components/native";

type ConteinerProps = {
  onDiet: boolean;
};
export const Container = styled.View<ConteinerProps>`
  flex: 1;
  background: ${({ onDiet, theme }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerHeaderStatistic = styled.View`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Body = styled.View`
  width: 100%;

  flex: 1;
  flex-direction: column;
  gap: 8px;

  background: ${(props) => props.theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export type SelectButtonType = "positive" | "negative";

type SelectButtonProps = {
  type: SelectButtonType;
};

export const OnDietCard = styled.View<SelectButtonProps>`
  margin-top: 24px;

  width: 145px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `}
  border: none;
  border-radius: 100px;
`;

export const OnDietCardText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
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
  border-radius: 50px;
  background: ${({ theme, type }) =>
    type === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
