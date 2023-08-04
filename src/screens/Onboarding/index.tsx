import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import Button from "@components/Button";
import Logo from "@components/Logo";
import { Text, View } from "react-native";
import { Container } from "./styles";
import { ArrowLineRight, ArrowRight } from "phosphor-react-native";

const Onboarding: React.FC = () => {
  const navigation = useNavigation();
  const { FONT_FAMILY, FONT_SIZE, COLORS } = useTheme();
  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Logo width={200} height={80} />
        <Text
          style={{
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.TITLE_M,
            color: COLORS.GRAY_1,
            marginTop: 40,
          }}
        >
          Bem-vindo,
        </Text>
        <Text
          style={{
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.TITLE_S,
            color: COLORS.GRAY_1,
          }}
        >
          Vamos mudar sua vida?
        </Text>
      </View>
      <Button
        title="Começar Dieta"
        width={200}
        icon={<ArrowRight />}
        iconPosition="right"
        onPress={() => navigation.navigate("home")}
      />
    </Container>
  );
};

export default Onboarding;
