import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask, getTask, updateTask } from "../api";
import { styles } from "../styles/styles";

const DescriptionTextInput = (props) => {
  return <TextInput {...props} editable maxLength={200} />;
};

const UpdateTaskScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({ nombre: "", descripcion: "" });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await createTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Editar Tarea" });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ nombre: task.nombre, descripcion: task.descripcion });
      })();
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => handleChange("nombre", text)}
          placeholder="Nombre de tarea"
          placeholderTextColor={Colors[3]}
          value={task.nombre}
        />

        <DescriptionTextInput
          style={globalStyles.input}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleChange("descripcion", text)}
          placeholder="Describe la tarea, o anota lo que quieras :)"
          placeholderTextColor={Colors[3]}
          value={task.descripcion}
        />

        {!editing ? (
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.BotonTexto}>Guardar Tarea</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.ButtonUpdate} onPress={handleSubmit}>
            <Text style={styles.BotonTexto}>Editar Tarea</Text>
          </TouchableOpacity>
        )}

        <CustomButton text="Crear tarea" onPress={() => handleSubmit()} round />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdateTaskScreen;
