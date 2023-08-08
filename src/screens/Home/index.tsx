import React from "react";
import { Body, BodyTextRefeicoes, Container, HomeHeader } from "./styles";
import { ScrollView } from "react-native";
import Logo from "@components/Logo";
import Avatar from "@components/Avatar";
import StatisticCard from "@components/StatisticCard";
import Button from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import MealsList from "@components/MealsList";

const Home: React.FC = () => {
  const navigate = useNavigation();
  return (
    <Container>
      <HomeHeader>
        <Logo />
        <Avatar />
      </HomeHeader>
      <Body>
        <StatisticCard
          title="90,86%"
          subTitle="das refeições da dieta"
          hasIcon={true}
          colorType="GREEN"
          titleSize="TITLE_G"
        />
        <BodyTextRefeicoes>Refeições</BodyTextRefeicoes>
        <Button
          icon={<Plus />}
          title="Nova refeição"
          onPress={() => navigate.navigate("newMeal")}
        />
        <MealsList />
      </Body>
    </Container>
  );
};

export default Home;
