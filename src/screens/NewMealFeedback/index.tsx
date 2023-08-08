import React from "react";
import onDietImage from "../../assets/images/mealOnDiet.png";
import notInDietImage from "../../assets/images/mealNotInDiet.png";

import { Image, View } from "react-native";

import { Container, TextContainer, Title } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Button from "@components/Button";
import { SubTitle } from "@components/StatisticCard/styles";

type RouteParams = {
  onDiet: boolean;
};

const NewMealFeedback: React.FC = () => {
  const navigate = useNavigation();
  const { params } = useRoute();

  const { onDiet } = params as RouteParams;
  return (
    <Container>
      <TextContainer>
        <Title onDiet={onDiet}>
          {onDiet ? "Continue assim!" : "Que pena!"}
        </Title>
        <SubTitle>
          {onDiet
            ? "Você continua dentro da dieta. Muito bem!"
            : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
        </SubTitle>
      </TextContainer>
      <Image
        source={onDiet ? onDietImage : notInDietImage}
        alt={onDiet ? "Refeição na Dieta" : "Refeição fora da Dieta"}
      />
      <Button
        width={195}
        title="Ir para a página inicial"
        onPress={() => navigate.navigate("home")}
      />
    </Container>
  );
};

export default NewMealFeedback;
