import React from "react";
import avatar from "@assets/images/avatar.png";
import { Container } from "./styles";

type Props = {
  width?: number;
  height?: number;
};

const Avatar: React.FC<Props> = ({ width, height }) => {
  return (
    <Container
      widthStyle={width}
      heightStyle={height}
      source={avatar}
      alt="User photo"
      resizeMode="stretch"
    />
  );
};

export default Avatar;
