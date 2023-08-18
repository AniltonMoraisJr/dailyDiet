import { MealDTO } from "@domains/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/store.config";

export async function getMealById(id: number): Promise<MealDTO | null> {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals != null && storedMeals.length > 0) {
      const meals: MealDTO[] = JSON.parse(storedMeals);
      const meal: MealDTO | null = meals.find((m) => m.id === id) || null;
      return meal;
    }
    return null;
  } catch (error) {
    throw error;
  }
}
