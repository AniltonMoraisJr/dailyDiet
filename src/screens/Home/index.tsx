import React, { useCallback, useMemo, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";

import { Body, BodyTextRefeicoes, Container, HomeHeader } from "./styles";
import Logo from "@components/Logo";
import Avatar from "@components/Avatar";
import MealsList from "@components/MealsList";
import StatisticCard from "@components/StatisticCard";
import Button from "@components/Button";

import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealDTO } from "@domains/MealDTO";

const Home: React.FC = () => {
  const navigate = useNavigation();
  const [meals, setMeals] = useState<MealDTO[]>([]);

  const percentageOfMealsOnDiet = useMemo(() => {
    if (meals.length === 0) return 0;
    const totalOfMeals = meals.length;
    const totalOfMealsOnDiet = meals.filter(
      (meal) => meal.isOnTheDiet === true
    ).length;
    const totalOfMealsOffDiet = meals.filter(
      (meal) => meal.isOnTheDiet === false
    ).length;
    const percentagePositive = totalOfMealsOnDiet / totalOfMeals;
    const percentageNegative = totalOfMealsOffDiet / totalOfMeals;

    return percentageNegative > percentagePositive
      ? percentageNegative * -1 * 100
      : percentagePositive * 100;
  }, [meals]);

  const fetchMeals = useCallback(async () => {
    try {
      const storedMeals = await getAllMeals();

      setMeals(storedMeals);
    } catch (error) {}
  }, []);

  useFocusEffect(() => {
    fetchMeals();
  });

  return (
    <Container>
      <HomeHeader>
        <Logo />
        <Avatar />
      </HomeHeader>
      <Body>
        <StatisticCard
          title={`${
            percentageOfMealsOnDiet < 0
              ? (percentageOfMealsOnDiet * -1).toFixed(2).replaceAll(".", ",")
              : percentageOfMealsOnDiet.toFixed(2).replaceAll(".", ",")
          }%`}
          subTitle="das refeições da dieta"
          hasIcon={true}
          colorType={
            percentageOfMealsOnDiet === 0
              ? "GRAY"
              : percentageOfMealsOnDiet < 0
              ? "RED"
              : "GREEN"
          }
          titleSize="TITLE_G"
          onPress={() => navigate.navigate("statistics")}
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
