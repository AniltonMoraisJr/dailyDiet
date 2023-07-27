import React from "react";
import logo from "@assets/images/logo.png";
import { Container } from "./styles";

type Props = {
  width?: number;
  height?: number;
};

const Logo: React.FC<Props> = ({ width, height }) => {
  return (
    <Container
      widthStyle={width}
      heightStyle={height}
      source={logo}
      alt="Daily Diet"
      resizeMode="stretch"
    />
  );
};

export default Logo;
