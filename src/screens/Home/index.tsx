import React from "react";
import { Container, HomeHeader } from "./styles";
import { Text } from "react-native";
import Logo from "@components/Logo";
import Avatar from "@components/Avatar";

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader>
        <Logo />
        <Avatar />
      </HomeHeader>
    </Container>
  );
};

export default Home;
