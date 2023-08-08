import { MealDTO } from "@domains/MealDTO";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { Circle, Container, MealCardItem, MealDateTitle } from "./styles";

// import { Container } from './styles';

type PropsGroupItem = {
  meal: MealDTO;
};

const MealListGroupItem: React.FC<PropsGroupItem> = ({ meal }) => {
  return (
    <MealCardItem>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text>{meal.hour}</Text>
        <Text> | </Text>
        <Text>{meal.name}</Text>
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
