import React from "react";
import { Text, View, Button } from "react-native";
import Card from "../shared/card";
import globalStyles from "../styles/global";

const ReviewDetails = (props) => {
  const { navigation, route } = props;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
