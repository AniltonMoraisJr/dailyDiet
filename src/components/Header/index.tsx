import React from "react";
import { View } from "react-native";
import { Container, IconContainer, Title, TitleContainer } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

// import { Container } from './styles';

type Props = {
  title?: string;
  titleComponent?: React.ReactNode;
  handleIconArrowLeft: () => void;
  backgroundType?: "default" | "success" | "danger";
};

const Header: React.FC<Props> = ({
  backgroundType = "default",
  title,
  titleComponent,
  handleIconArrowLeft,
}) => {
  const { COLORS } = useTheme();
  return (
    <Container backgroundType={backgroundType}>
      <IconContainer onPress={handleIconArrowLeft}>
        <ArrowLeft
          size={24}
          color={
            backgroundType === "default"
              ? COLORS.GRAY_2
              : backgroundType === "success"
              ? COLORS.GREEN_DARK
              : COLORS.RED_DARK
          }
        />
      </IconContainer>
      {title ? (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      ) : titleComponent ? (
        <TitleContainer>{titleComponent}</TitleContainer>
      ) : null}
    </Container>
  );
};

export default Header;
