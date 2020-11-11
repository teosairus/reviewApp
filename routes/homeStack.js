import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator headerMode="false">
    <Screen name="Home" component={Home} />
    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeStack;
