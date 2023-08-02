import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import Background from "@components/Background";
import Routes from "@routes/index";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
          <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
