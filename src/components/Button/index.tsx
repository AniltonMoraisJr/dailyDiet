import React from "react";
import { useTheme } from "styled-components/native";

import { ButtonType, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { IconContext } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  icon?: React.ReactElement;
  iconPosition?: "right" | "left";
  title: string;
  type?: ButtonType;
};

const Button: React.FC<Props> = ({
  icon,
  iconPosition = "left",
  title,
  type = "PRIMARY",
  ...rest
}) => {
  const { COLORS } = useTheme();
  return (
    <Container type={type} {...rest}>
      {icon && iconPosition === "left" && (
        <IconContext.Provider
          value={{
            color: type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_1,
            weight: "bold",
            size: 18,
          }}
        >
          {icon}
        </IconContext.Provider>
      )}
      <Title type={type}>{title}</Title>
      {icon && iconPosition === "right" && (
        <IconContext.Provider
          value={{
            color: type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_1,
            weight: "bold",
            size: 18,
          }}
        >
          {icon}
        </IconContext.Provider>
      )}
    </Container>
  );
};

export default Button;
