import styled from "styled-components/native";

type CardColorType = "GRAY" | "RED" | "GREEN";

export type CardStyleProps = {
  colorType: CardColorType;
  width: number;
  height: number;
};

export type TitleStypeProps = {
  textSize: "TITLE_G" | "TITLE_M";
};

export const Container = styled.View<CardStyleProps>``;
export const Title = styled.Text<TitleStypeProps>`
  text-align: center;
  font-size: ${({ textSize, theme }) => theme.FONT_SIZE[textSize]}px;
`;
export const SubTitle = styled.Text``;
export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;
