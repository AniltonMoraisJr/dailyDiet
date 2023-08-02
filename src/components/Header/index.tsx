import React from "react";
import { View } from "react-native";
import { Container, IconContainer, Title } from "./styles";
import { ArrowLeft } from "phosphor-react-native";

// import { Container } from './styles';

type Props = {
  title?: string
  handleIconArrowLeft: () => void
  backgroundType?: 'default' | 'success' | 'danger'
}

const Header: React.FC<Props> = ({backgroundType = 'default', title, handleIconArrowLeft}) => {
  return <Container backgroundType={backgroundType}>
    <IconContainer onPress={handleIconArrowLeft}>
      <ArrowLeft size={24} />
    </IconContainer>
    {title && <Title>{title}</Title>}
  </Container>;
};

export default Header;