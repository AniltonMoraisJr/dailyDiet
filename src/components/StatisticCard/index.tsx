import React from "react";
import {
  CardStyleProps,
  IconContainer,
  SubTitle,
  Title,
  TitleStypeProps,
} from "./styles";
import { IconContext } from "phosphor-react-native";

import { Container } from "./styles";

type Props = CardStyleProps &
  TitleStypeProps & {
    title: string;
    subTitle?: string;
    icon?: React.ReactElement;
  };

const StatisticCard: React.FC<Props> = ({
  colorType,
  title,
  subTitle,
  icon,
  textSize,
  ...rest
}) => {
  return (
    <Container colorType={colorType} {...rest}>
      {icon && (
        <IconContainer>
          <IconContext.Provider value={{}}>{icon}</IconContext.Provider>
        </IconContainer>
      )}
      <Title textSize={textSize}>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default StatisticCard;
