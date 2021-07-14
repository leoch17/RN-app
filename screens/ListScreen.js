import React from "react";
import { View, Text, StyleSheet } from "react-native";

import globalStyles from "../styles/global";
import { Colors } from "../constants";

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TAREAS</Text>
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
