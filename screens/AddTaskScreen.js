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
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask } from "../store/actions/taskActions";
import { setActiveListId } from "../store/actions/listActions";

const AddTaskScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const { activeListId } = useSelector((state) => state.list);

  const submitHandler = () => {
    if (name.trim() === "") {
      return Alert.alert("Validación", "El nombre es requerido!");
    }
    const alreadyExist = tasks.find(
      (t) =>
        t.name.toLowerCase() === name.trim().tolowerCase() &&
        t.listId === activeListId
    );
    if (alreadyExist) {
      return Alert.alert(
        "Validación",
        "La tarea con este nombre ya existe en esta lista!"
      );
    }

    dispatch(
      createTask(
        name,
        activeListId,
        () => {
          ToastAndroid.show(`Tarea "${name}" creada!`, ToastAndroid.LONG);
          Keyboard.dismiss();
          navigation.goBack();
        },
        () => {
          ToastAndroid.show(
            "Algo ha salido mal, por favor intentelo de nuevo",
            ToastAndroid.LONG
          );
        }
      )
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={globalStyles.input}
          value={name}
          onChangeText={(val) => setName(val)}
          placeholder="Nombre de Tarea"
          placeholderTextColor={Colors[3]}
        />
        <CustomButton text="Enviar" onPress={submitHandler} round />
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
