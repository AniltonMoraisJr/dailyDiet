import styled, { css } from "styled-components/native";

type CardColorType = "GRAY" | "RED" | "GREEN";

export type CardStyleProps = {
  colorType: CardColorType;
};

export type TitleStypeProps = {
  titleSize: "TITLE_G" | "TITLE_M";
};

export const Container = styled.TouchableOpacity<CardStyleProps>`
  width: 100%;

  padding: 20px 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ theme: { COLORS }, colorType }) => css`
    background-color: ${colorType === "GRAY"
      ? COLORS.GRAY_6
      : colorType === "GREEN"
      ? COLORS.GREEN_LIGHT
      : COLORS.RED_LIGHT};
  `}

  border-radius: 8px;
`;
export const Title = styled.Text<TitleStypeProps>`
  text-align: center;
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${({ titleSize, theme }) => theme.FONT_SIZE[titleSize]}px;
  color: ${(props) => props.theme.COLORS.GRAY_1};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${(props) => props.theme.COLORS.GRAY_2};
`;
export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;
