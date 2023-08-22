import React, { useState, useCallback, useEffect } from "react";
import { MealDTO } from "@domains/MealDTO";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { getAllMeals } from "@storage/meals/getAllMeals";
import MealListGroup from "@components/MealListGroup";

type MealGrouped = {
  mealDate: string;
  meals: MealDTO[];
};

type MealsListProps = {
  mealsList: MealDTO[];
};

const MealsList: React.FC<MealsListProps> = ({ mealsList }) => {
  const [meals, setMeals] = useState<MealGrouped[]>([]);

  useEffect(() => {
    let mealsGrouped = [] as MealGrouped[];
    const storedMeals = mealsList;
    storedMeals.sort((a, b) => a.hour.localeCompare(b.hour));
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
  }, [mealsList]);
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
