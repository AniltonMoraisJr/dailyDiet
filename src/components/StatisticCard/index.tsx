import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ArrowUpRight, IconContext } from "phosphor-react-native";
import {
  CardStyleProps,
  IconContainer,
  SubTitle,
  Title,
  TitleStypeProps,
} from "./styles";

import { useTheme } from "styled-components/native";
import { Container } from "./styles";

type Props = TouchableOpacityProps &
  CardStyleProps &
  TitleStypeProps & {
    title: string;
    subTitle?: string;
    hasIcon?: boolean;
  };

const StatisticCard: React.FC<Props> = ({
  colorType,
  title,
  subTitle,
  hasIcon,
  titleSize,
  ...rest
}) => {
  const { COLORS } = useTheme();
  return (
    <Container colorType={colorType} {...rest}>
      {hasIcon && (
        <IconContainer>
          <IconContext.Provider
            value={{
              size: 24,
              color:
                colorType === "GRAY"
                  ? COLORS.GRAY_7
                  : colorType === "GREEN"
                  ? COLORS.GREEN_DARK
                  : colorType === "RED"
                  ? COLORS.RED_DARK
                  : "transparent",
            }}
          >
            <ArrowUpRight />
          </IconContext.Provider>
        </IconContainer>
      )}
      <Title titleSize={titleSize}>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default StatisticCard;
