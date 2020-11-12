import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const { Navigator, Screen } = createBottomTabNavigator();

export const RootDrawerNavigator = ({ navigation }) => (
  <Navigator
    tabBarOptions={{
      tabStyle: { justifyContent: "center" },
      labelStyle: { fontSize: 15 },
      activeTintColor: "maroon",
    }}
  >
    <Screen name="Home" component={HomeStack} options={{ tabBarBadge: 3 }} />
    <Screen name="About" component={AboutStack} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
