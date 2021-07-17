import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "./../constants/index";
import { useDispatch } from "react-redux";

import { getLists } from "../store/actions/listActions";
import globalStyles from "./../styles/global";
import Lists from "../components/Lists";
import CustomButton from "../components/CustomButton";
import Task from "../components/Task";
import AddListS, {taskItems} from "./AddListS";

const HomeS = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <View>
        {
            /*Lista de tareas*/
            taskItems.map((item) => {
                return <Task text={item} />
            })
        }
        </View>
      <CustomButton
        text="Agregar nueva lista"
        icon="add"
        iconColor="#fff"
        onPress={() => navigation.navigate("NewListS")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeS;
