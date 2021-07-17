import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
  ToastAndroid,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import Task from "../components/Task";

export const taskItems = [];

const AddListS = ({ navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      return Alert.alert("Error de Validación", "El nombre de la lista es requerido!");
    }

    setTaskItems([...taskItems, task]);
    setTask(null);
}
    
console.log(taskItems);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={globalStyles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder="Nombre de Lista"
          placeholderTextColor={Colors[3]}
        />
        <CustomButton text="Crear" onPress={() => handleAddTask()} round />
        <View>
        {
            /*Lista de tareas*/
            taskItems.map((item) => {
                return <Task text={item} />
            })
        }
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
});

export default AddListS;
