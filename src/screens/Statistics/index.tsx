import React, { useCallback, useState, useMemo } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealDTO } from "@domains/MealDTO";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useTheme } from "styled-components/native";

import Header from "@components/Header";
import {
  Body,
  Container,
  ContainerHeaderStatistic,
  SubTitle,
  Title,
} from "./styles";
import StatisticCard from "@components/StatisticCard";

const Statistics: React.FC = () => {
  const navigate = useNavigation();
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const [meals, setMeals] = useState<MealDTO[]>([]);

  const betterSequence = useMemo(() => {
    let betterSequence = 0;
    let cont = 0;
    let loopMeals = meals;
    loopMeals = loopMeals.sort((a, b) => a.hour.localeCompare(b.hour));

    loopMeals.forEach((meal, index) => {
      if (meal.isOnTheDiet === true) {
        cont++;
      } else {
        if (cont > betterSequence) {
          betterSequence = cont;
          cont = 0;
        }
      }
      if (index === loopMeals.length - 1) {
        if (cont > betterSequence) {
          betterSequence = cont;
          cont = 0;
        }
      }
    });

    return betterSequence;
  }, [meals]);

  const totalOfMeals = useMemo(() => {
    return meals.length;
  }, [meals]);

  const totalOfMealsOnDiet = useMemo(() => {
    return meals.filter((meal) => meal.isOnTheDiet === true).length;
  }, [meals]);

  const totalOfMealsOffDiet = useMemo(() => {
    return meals.filter((meal) => meal.isOnTheDiet === false).length;
  }, [meals]);

  const percentageOfMealsOnDiet = useMemo(() => {
    if (totalOfMeals === 0) return 0;
    const percentagePositive = totalOfMealsOnDiet / totalOfMeals;
    const percentageNegative = totalOfMealsOffDiet / totalOfMeals;

    return percentageNegative > percentagePositive
      ? percentageNegative * -1 * 100
      : percentagePositive * 100;
  }, [totalOfMeals, totalOfMealsOnDiet, totalOfMealsOffDiet]);

  const fetchMeals = async () => {
    try {
      const storedMeals = await getAllMeals();
      setMeals(storedMeals);
    } catch (error) {}
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container onDiet={percentageOfMealsOnDiet > 0}>
      <Header
        handleIconArrowLeft={() => navigate.navigate("home")}
        titleComponent={
          <ContainerHeaderStatistic>
            <Title>
              {percentageOfMealsOnDiet > 0
                ? percentageOfMealsOnDiet.toFixed(2).replaceAll(".", ",")
                : (percentageOfMealsOnDiet * -1)
                    .toFixed(2)
                    .replaceAll(".", ",")}{" "}
              %
            </Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
          </ContainerHeaderStatistic>
        }
        backgroundType={
          percentageOfMealsOnDiet === 0
            ? "default"
            : percentageOfMealsOnDiet > 0
            ? "success"
            : "danger"
        }
      />

      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: COLORS.WHITE,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView>
          <Body>
            <Text
              style={{
                textAlign: "center",
                fontFamily: FONT_FAMILY.BOLD,
                fontSize: FONT_SIZE.TITLE_XS,
              }}
            >
              Estatísticas gerais
            </Text>
            <StatisticCard
              colorType="GRAY"
              title={betterSequence.toString()}
              titleSize="TITLE_M"
              subTitle="melhor sequência de pratos dentro da dieta"
            />
            <StatisticCard
              colorType="GRAY"
              title={totalOfMeals.toString()}
              titleSize="TITLE_M"
              subTitle="refeições registradas"
            />
            <View style={{ flexDirection: "row", gap: 12 }}>
              <View style={{ width: 166 }}>
                <StatisticCard
                  colorType="GREEN"
                  title={totalOfMealsOnDiet.toString()}
                  titleSize="TITLE_M"
                  subTitle="refeições dentro da dieta"
                />
              </View>
              <View style={{ width: 166 }}>
                <StatisticCard
                  colorType="RED"
                  title={totalOfMealsOffDiet.toString()}
                  titleSize="TITLE_M"
                  subTitle="refeições fora da dieta"
                />
              </View>
            </View>
          </Body>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Statistics;
