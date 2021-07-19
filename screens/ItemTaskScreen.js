import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ItemTaskScreen = ({ HomeScreen, handleDelete }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "black", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(HomeScreen.id)}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemTaskScreen;
