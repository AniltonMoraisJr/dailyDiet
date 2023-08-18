import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import Onboarding from "@screens/Onboarding";
import NewMeal from "@screens/NewMeal";
import NewMealFeedback from "@screens/NewMealFeedback";
import Statistics from "@screens/Statistics";
import MealDetail from "@screens/MealDetail";

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="showMeal" component={MealDetail} />
      <Stack.Screen name="newMeal" component={NewMeal} />
      <Stack.Screen name="newMealFeedback" component={NewMealFeedback} />
      <Stack.Screen name="statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
