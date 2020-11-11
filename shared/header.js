import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const Header = ({ navigation, title }) => {
  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    >
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
