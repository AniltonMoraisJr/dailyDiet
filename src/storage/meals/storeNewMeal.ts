import { MealDTO } from "@domains/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/store.config";
import { getAllMeals } from "./getAllMeals";

export async function storeNewMeal(newMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeals();
    storedMeals.push(newMeal);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}
