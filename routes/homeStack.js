import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      }}
    />
    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeStack;
