import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import Logo from "@components/Logo";

const Onboarding: React.FC = () => {
  const navigation = useNavigation();
  const { FONT_FAMILY, FONT_SIZE, COLORS } = useTheme();
  return (
    <Container>
      <View style={{ marginTop: "auto", alignItems: "center", gap: 16 }}>
        <Logo width={200} height={80} />
        <Text
          style={{
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.XLG,
            color: COLORS.GRAY_1,
          }}
        >
          Bem-vindo,
        </Text>
        <Text
          style={{
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.XLG,
            color: COLORS.GRAY_1,
          }}
        >
          Vamos mudar sua vida?
        </Text>
      </View>
      <TouchableOpacity
        style={{ marginTop: "auto", marginBottom: 24 }}
        onPress={() => navigation.navigate("home")}
      >
        <Text>Começar</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Onboarding;
