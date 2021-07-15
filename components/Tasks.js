import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import { Colors } from "../constants";
import globalStyles from "../styles/global";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text>Tareas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tasks;
