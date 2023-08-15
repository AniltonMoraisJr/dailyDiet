import { Onboarding } from "@screens/Onboarding";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      onboarding: undefined;
      home: undefined;
      newMeal: undefined;
      newMealFeedback: {
        onDiet: boolean;
      };
      statistics: undefined;
    }
  }
}
