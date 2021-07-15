import React from "react";
import { View, StyleSheet } from "react-native";

import globalStyles from "../styles/global";
import { Colors } from "../constants";
import CustomButton from "../components/CustomButton";
import Tasks from "../components/Tasks";

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Tasks />
      <CustomButton
        Text="Añadir Nueva Tarea"
        icon="add"
        iconColor="#fff"
        onPress={() => navigation.navigate("NewTask")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default ListScreen;
