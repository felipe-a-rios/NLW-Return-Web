import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Widget from "./src/components/Widget";
import { theme } from "./src/theme";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
