import { MealDTO } from "@domains/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/store.config";

export async function getAllMeals(): Promise<MealDTO[]> {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals != null && storedMeals.length > 0) {
      const meals: MealDTO[] = JSON.parse(storedMeals);
      return meals;
    }
    return [];
  } catch (error) {
    throw error;
  }
}
