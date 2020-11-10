import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { AppLoading } from "expo";

const getFonts = () => {
  return Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({});
