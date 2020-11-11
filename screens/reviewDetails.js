import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/card";
import images from "../styles/images";
import globalStyles from "../styles/global";

const ReviewDetails = (props) => {
  const { navigation, route } = props;
  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
