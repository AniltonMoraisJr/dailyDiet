import { MealDTO } from "@domains/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/store.config";

export async function storeNewMeal(newMeal: MealDTO) {
  try {
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeal));
  } catch (error) {
    throw error;
  }
}
