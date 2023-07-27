import React from "react";
import { Container } from "./styles";
import { StatusBar } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
      />
      {children}
    </Container>
  );
};

export default Background;
