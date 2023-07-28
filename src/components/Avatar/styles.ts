import { Image } from "react-native";
import { styled, css } from "styled-components/native";

type Props = {
  widthStyle?: number;
  heightStyle?: number;
};

export const Container = styled.Image<Props>`
  ${(props) =>
    props.widthStyle &&
    props.heightStyle &&
    css`
      width: ${props.widthStyle}px;
      height: ${props.heightStyle}px;
    `}
`;
