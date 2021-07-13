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
import { createList } from "../store/actions/listActions";
import { name } from "ci-info";

const AddListScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.list);

  const submitHandler = () => {
    if (name.trim() === "") {
      return Alert.alert("Validación", "El nombre es requerido!");
    }
    const alreadyExist = lists.find(
      (l) => l.name.tolowerCase() === name.trim().tolowerCase()
    );
    if (alreadyExist) {
      return Alert.alert("Validación", "La lista con este nombre ya existe");
    }

    dispatch(
      createList(
        name,
        () => {
          ToastAndroid.show(`Lista "${name}" creada!`, ToastAndroid.LONG);
          Keyboard.dismiss();
          navigation.navigate("Home");
        },
        () => {
          ToastAndroid.show(
            `Algo ha salido mal, por favor intentelo de nuevo`,
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
          placeholder="Nombre de Lista"
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

export default AddListScreen;