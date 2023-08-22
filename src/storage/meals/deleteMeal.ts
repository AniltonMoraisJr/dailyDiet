import { MealDTO } from "@domains/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/store.config";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(mealId: number) {
  try {
    let storedMeals = await getAllMeals();
    storedMeals = storedMeals.filter((meal) => meal.id !== mealId);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}
