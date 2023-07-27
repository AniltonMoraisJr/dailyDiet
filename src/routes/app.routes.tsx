import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import Onboarding from "@screens/Onboarding";

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
    </Stack.Navigator>
  );
};

export default AppRoutes;
