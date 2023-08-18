import { MealDTO } from "@domains/MealDTO";
import React from "react";
import { FlatList, Text, View } from "react-native";
import {
  Circle,
  Container,
  MealCardItem,
  MealCardItemHourText,
  MealCardItemNameText,
  MealDateTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

type PropsGroupItem = {
  meal: MealDTO;
};

const MealListGroupItem: React.FC<PropsGroupItem> = ({ meal }) => {
  const navigate = useNavigation();
  return (
    <MealCardItem
      onPress={() => navigate.navigate("showMeal", { mealId: meal.id! })}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <MealCardItemHourText>{meal.hour}</MealCardItemHourText>
        <Text style={{ marginHorizontal: 12 }}>|</Text>
        <MealCardItemNameText>{meal.name}</MealCardItemNameText>
      </View>
      <Circle onDiet={meal.isOnTheDiet!} />
    </MealCardItem>
  );
};

type Props = {
  mealDate: string;
  meals: MealDTO[];
};

const MealListGroup: React.FC<Props> = ({ mealDate, meals }) => {
  return (
    <Container>
      <MealDateTitle>{mealDate.replaceAll("/", ".")}</MealDateTitle>
      <FlatList
        data={meals}
        keyExtractor={(item) => `${item.name}_${item.hour}_${item.date}`}
        renderItem={({ item }) => <MealListGroupItem meal={item} />}
      />
    </Container>
  );
};

export default MealListGroup;
