import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/AppNavigator";

const getFonts = () => {
  return Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
