import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants";

const Task = ({ text, onPress }) => {
  const [iconText, seticonText] = useState("pushpino")
  return (
    <View style={styles.container}>
      <View style={globalStyles.listContainer}>
        <TouchableOpacity style={globalStyles.listItem} onPress={onPress}>
          <Text style={styles.itemText}>{text}</Text>
            <AntDesign name="edit" size={22} style={styles.icon3}></AntDesign>
            <AntDesign name="delete" size={22} style={styles.icon2}></AntDesign>
            <AntDesign name={iconText} onPress={() => {
              if (iconText == "pushpino") {seticonText("pushpin")} else { seticonText("pushpino") }}
            } size={22} style={styles.icon} />

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
    width: "65%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginRight: 5,
    color: Colors[1],
  },
  icon2: {
    marginRight: 10,
    color: "red",
  },
  icon3: {
    marginRight: 10,
    color: Colors[1],
  },
});

export default Task;
