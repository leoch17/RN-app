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

const DescriptionTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      editable
      maxLength={200}
    />
  );
}

const AddTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [description, onChangeText] = useState();

  const handleAddTask = () => {
    if (task.trim() === '') {
      return Alert.alert("Error de Validación", "El nombre de la tarea es requerido!");
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
          placeholder="Nombre de tarea"
          placeholderTextColor={Colors[3]}
        />
        <DescriptionTextInput 
          style={globalStyles.input}
          multiline 
          numberOfLines={4}
          onChangeText={text => onChangeText(text)}
          placeholder="Descripción de la tarea"
          placeholderTextColor={Colors[3]}
          value={description}
          
          /> 
        <CustomButton text="Crear tarea" onPress={() => handleAddTask()} round />

        <View>
      
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

export default AddTaskScreen;
