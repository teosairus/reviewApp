import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../shared/header";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = ({ navigation }) => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}
  >
    <Screen
      name="Home"
      component={HomeStack}
      options={{
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      }}
    />
    <Screen
      name="About"
      component={AboutStack}
      options={{
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
