import React, { useState, useCallback } from "react";
import { MealDTO } from "@domains/MealDTO";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { getAllMeals } from "@storage/meals/getAllMeals";
import MealListGroup from "@components/MealListGroup";

// import { Container } from './styles';

type MealGrouped = {
  mealDate: string;
  meals: MealDTO[];
};

const MealsList: React.FC = () => {
  const [meals, setMeals] = useState<MealGrouped[]>([]);

  const fetchMeals = useCallback(async () => {
    try {
      const storedMeals = await getAllMeals();
      let mealsGrouped = [] as MealGrouped[];
      storedMeals.forEach((meal) => {
        if (
          mealsGrouped.filter((item) => item.mealDate === meal.date).length > 0
        ) {
          mealsGrouped = mealsGrouped.map((mealsGrouped) => {
            if (mealsGrouped.mealDate === meal.date) {
              mealsGrouped.meals.push({ ...meal });
            }
            return mealsGrouped;
          });
        } else {
          mealsGrouped = [
            ...mealsGrouped,
            {
              mealDate: meal.date,
              meals: [meal],
            },
          ];
        }
      });

      mealsGrouped.sort((a, b) => a.mealDate.localeCompare(b.mealDate));

      setMeals(mealsGrouped);
    } catch (error) {}
  }, []);

  useFocusEffect(() => {
    fetchMeals();
  });
  return (
    <FlatList
      style={{ marginTop: 32 }}
      data={meals}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.mealDate}
      renderItem={({ item }) => (
        <MealListGroup mealDate={item.mealDate} meals={item.meals} />
      )}
      contentContainerStyle={meals.length === 0 && { flex: 1 }}
    />
  );
};

export default MealsList;
