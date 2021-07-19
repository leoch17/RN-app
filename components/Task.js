import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants";

const Task = (props) => {
  return (
    <View style={styles.container}>
      <View style={globalStyles.listContainer}>
        <TouchableOpacity style={globalStyles.listItem}>
          <Text style={styles.itemText}>{props.text}</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="pushpino" size={22} style={styles.icon} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  itemText: {
    maxWidth: "90%",
    width: "90%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginRight: 5,
    color: Colors[1],
  },
});

export default Task;