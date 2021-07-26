import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants";

const Product = ({ text, onPress, price }) => {
  return (
    <View style={styles.container}>
      <View style={globalStyles.listContainer}>
        <TouchableOpacity style={globalStyles.listItem} onPress={onPress}>
          
          <Text style={styles.itemText}>{text}</Text>
          <View style={styles.price}>
            <Text style={styles.itemText}>{price}</Text>
          </View>
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
    borderWidth: 1,
    width: "80%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
  },
  priceText: {
    marginRight: 5,
    color: "black",
  },
});

export default Product;
