import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import globalStyles from "../styles/global";

const Task = (props) => {
    

  return (
    <View style={styles.container}>
        <View style={globalStyles.listContainer}>
        
            <TouchableOpacity
              style={globalStyles.listItem}>
              <Text style={styles.itemText}>Esta es la tarea: {props.text}</Text>
            </TouchableOpacity>
       
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  itemText: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
  },
});

export default Task;