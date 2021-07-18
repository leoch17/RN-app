import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask } from "../api";

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
  
  const [task, setTask] = useState({
    nombre: '',
    descripcion: ''
  });

  const handleChange = (name, value) => setTask({...task, [name]: value  });

  const handleSubmit = () => {
    if (task.nombre.trim() === '') {
      return Alert.alert("Error de Validación", "El nombre de la tarea es requerido!");
    } else {
      try {
        createTask(task);
        navigation.navigate("Home")
      } catch (error) {
        console.log(error);
      }
      
    }
  }
    
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={globalStyles.input}
          value={task.nombre}
          onChangeText={(text) => handleChange('nombre', text)}
          placeholder="Nombre de tarea"
          placeholderTextColor={Colors[3]}
        />
        <DescriptionTextInput 
          style={globalStyles.input}
          multiline 
          numberOfLines={4}
          value={task.descripcion}
          onChangeText={(text) => handleChange('descripcion', text)}
          placeholder="Describe la tarea, o anota lo que quieras :)"
          placeholderTextColor={Colors[3]}
          /> 
        <CustomButton text="Crear tarea" onPress={() => handleSubmit()} round />

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
