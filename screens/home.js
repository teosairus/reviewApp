import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/global";

const Home = (props) => {
  const { navigation } = props;

  const [modalOpen, setModalOpen] = useState(false);
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
      <Modal visible={modalOpen} animationType="slide">
        <MaterialIcons
          name="close"
          size={24}
          style={{ ...styles.modalToggle, ...styles.modalClose }}
          onPress={() => {
            setModalOpen(false);
          }}
        />
        <View style={styles.modalContent}>
          <Text>Hello from the modal</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => {
          setModalOpen(true);
        }}
      />

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

const styles = StyleSheet.create({
  modalContent: { flex: 1 },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    borderColor: "#f2f2f2",
  },
});
