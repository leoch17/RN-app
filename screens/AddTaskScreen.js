import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
  //Picker,
  Text,
  Button,
} from "react-native";
//import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask } from "../api";

const DescriptionTextInput = (props) => {
  return <TextInput {...props} editable maxLength={200} />;
};

const AddTaskScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [task, setTask] = useState({ nombre: "", descripcion: "" });

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = () => {
    if (task.nombre.trim() === "") {
      return Alert.alert(
        "Error de Validación",
        "El nombre de la tarea es requerido!"
      );
    } else {
      try {
        console.log(task);
        createTask(task);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // DATETIME
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log(date);
    const currentDate = selectedDate || date;
    console.log(currentDate);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Picker para tag
        <View style={{flexDirection: "row"}}>
          <Text>Tag: </Text> 
          <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View> */}
        <TextInput
          style={globalStyles.input}
          value={task.nombre}
          onChangeText={(text) => handleChange("nombre", text)}
          placeholder="Nombre de tarea"
          placeholderTextColor={Colors[3]}
        />

        <Text style={globalStyles.noData}>Fecha y hora de vencimiento: </Text>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <DescriptionTextInput
          style={globalStyles.input}
          multiline
          numberOfLines={4}
          value={task.descripcion}
          onChangeText={(text) => handleChange("descripcion", text)}
          placeholder="Describe la tarea, o anota lo que quieras :)"
          placeholderTextColor={Colors[3]}
        />
        <CustomButton text="Crear tarea" onPress={() => handleSubmit()} round />

        <View></View>
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
