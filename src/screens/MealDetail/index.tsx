import React, { useCallback, useState, useMemo, useEffect } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealDTO } from "@domains/MealDTO";
import {
  ActivityIndicator,
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
  Circle,
  Container,
  ContainerHeaderStatistic,
  OnDietCard,
  OnDietCardText,
  SubTitle,
  Title,
} from "./styles";
import StatisticCard from "@components/StatisticCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@components/Button";
import {
  Pencil,
  PencilLine,
  PencilSimple,
  PencilSimpleLine,
  Trash,
  TrashSimple,
} from "phosphor-react-native";
import { getMealById } from "@storage/meals/getMealById";

type RouteParams = {
  mealId: number;
};

const MealDetail: React.FC = () => {
  const navigate = useNavigation();
  const { params } = useRoute();

  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const [meal, setMeal] = useState<MealDTO | null>(null);

  const { mealId } = params as RouteParams;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getMealById(mealId);
        setMeal(result);
      } catch (error) {}
    }
    fetchData();
  }, [mealId]);

  return (
    <Container onDiet={meal && meal.isOnTheDiet ? meal.isOnTheDiet : false}>
      <Header
        handleIconArrowLeft={() => navigate.navigate("home")}
        title="Refeição"
        backgroundType={
          meal && meal.isOnTheDiet
            ? "success"
            : meal && meal.isOnTheDiet === false
            ? "danger"
            : "default"
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
        {meal ? (
          <Body>
            <Text
              style={{
                fontFamily: FONT_FAMILY.BOLD,
                fontSize: FONT_SIZE.TITLE_M,
                color: COLORS.GRAY_1,
              }}
            >
              {meal?.name}
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY.REGULAR,
                fontSize: FONT_SIZE.BODY_M,
                color: COLORS.GRAY_2,
              }}
            >
              {meal?.description}
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY.BOLD,
                fontSize: FONT_SIZE.TITLE_XS,
                color: COLORS.GRAY_1,
                marginTop: 24,
              }}
            >
              Data e hora
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY.REGULAR,
                fontSize: FONT_SIZE.BODY_M,
                color: COLORS.GRAY_2,
              }}
            >{`${meal?.date} às ${meal?.hour}`}</Text>
            <OnDietCard type={meal.isOnTheDiet ? "positive" : "negative"}>
              <Circle type={meal.isOnTheDiet ? "positive" : "negative"} />
              <OnDietCardText>
                {meal.isOnTheDiet ? "dentro da dieta" : "fora da dieta"}
              </OnDietCardText>
            </OnDietCard>
          </Body>
        ) : (
          <ActivityIndicator />
        )}
      </KeyboardAvoidingView>
      <SafeAreaView
        style={{
          paddingBottom: Platform.OS === "android" ? 27 : 0,
          justifyContent: `center`,
          alignItems: "center",
          backgroundColor: COLORS.WHITE,
          gap: 9,
        }}
      >
        <Button
          width={320}
          icon={<PencilSimpleLine />}
          title="Editar refeição"
        />
        <Button
          type="SECONDARY"
          width={320}
          icon={<Trash />}
          title="Excluir refeição"
        />
      </SafeAreaView>
    </Container>
  );
};

export default MealDetail;
