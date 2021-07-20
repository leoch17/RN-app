import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask, getTask, updateTask } from "../api/api.tasks";
import CustomButton from "../components/CustomButton";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";



const TaskScreen = ({ navigation, route }) => {
    const [task, setTask] = useState();

    const taskid = route.params.id;
    const taskname = route.params.nombre;
    const taskdescription = route.params.descripcion;

    /*
    console.log(taskid)
    console.log(taskname)
    console.log(taskid.id)
    */
    const isFocused = useIsFocused();

    const loadTask = async () => {
        try {
            const data = await getTask(taskid);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
/*
    useEffect(() => {
        loadTask();
      }, [isFocused]);
*/
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.TituloPagina}>{taskname}</Text>
        <View style={styles.div}></View>
        <Text style={styles.SubTitulo}>{taskdescription}</Text>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Update", {id: taskid})
            }}>
                <AntDesign name="edit" size={26} style={styles.icon}></AntDesign>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },
  div: {
      borderTopWidth: 1
  },
  TituloPagina: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: Colors[1],
  },
  SubTitulo: {
    fontFamily: "Ubuntu-Medium",
    textAlign: "center",
    fontSize: 18,
    margin: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#3d414a",
  },
  iconContainer: {
    justifyContent: 'center',
      alignItems: 'center'
  },
  icon: {
      color: Colors.luzoscuro,
      
  } 
});

export default TaskScreen;
