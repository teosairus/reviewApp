import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Card from "../shared/card";
import globalStyles from "../styles/global";

const Home = (props) => {
  const { navigation } = props;

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem Ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "Lorem Ipsum",
      key: "2",
    },
    {
      title: 'Not so "Final" Fantasy',
      rating: 3,
      body: "Lorem Ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
