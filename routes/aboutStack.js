import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
  <Navigator headerMode="false">
    <Screen name="About" component={About} />
  </Navigator>
);

export default AboutStack;
