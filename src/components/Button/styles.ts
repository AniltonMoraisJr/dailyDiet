import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonType = "PRIMARY" | "SECONDARY";

type ButtonStyleProps = {
  type: ButtonType;
  width?: number
};

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  padding: 16px 24px;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;

  width: ${props => props.width ? `${props.width}px` : '100%'};

  ${(props) =>
    props.type === "PRIMARY"
      ? css`
          background-color: ${props.theme.COLORS.GRAY_1};
        `
      : css`
          background-color: ${props.theme.COLORS.WHITE};
          border: 1px solid ${props.theme.COLORS.GRAY_1};
        `}

  border-radius: 6px;
`;

export const Title = styled.Text<ButtonStyleProps>`
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_S}px;

  ${(props) =>
    props.type === "PRIMARY"
      ? css`
          color: ${props.theme.COLORS.WHITE};
        `
      : css`
          color: ${props.theme.COLORS.GRAY_1};
        `}
`;
