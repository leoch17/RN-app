import React, { useState, useRef, ForwardedRef } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, TextInput,
  Keyboard, Alert, Picker, Text, Button, Switch, SwitchComponent } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createTask } from "../api/api.tasks";
import * as Notifications from 'expo-notifications';

// Input de descripción
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
  const [selectedValue, setSelectedValue] = useState("java");

  const [task, setTask] = useState({ nombre: '', descripcion: '' });
  const handleChange = (name, value) => setTask({...task, [name]: value  });

  const handleSubmit = () => {
    if (task.nombre.trim() === '') {
      return Alert.alert("Error de Validación", "El nombre de la tarea es requerido!");
    } else {
      try {
        console.log(task)
        createTask(task);
        if (switchValue === true) {
          console.log(date1)
          createNotification();
        }
        navigation.navigate("Home")
      } catch (error) {
        console.log(error);
      }
      
    }
  }


  
  // Notificacion
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  const today = new Date();
  const [date1, setDate1] = useState(today);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [d1text, setD1text] = useState('Sin establecer');

  const onChange = (event, selectedDate) => {
    const currentDate1 = selectedDate || date1;
    
    //console.log(currentDate1);
    setShow(Platform.OS === 'ios');
    setDate1(currentDate1);

    let tempDate = new Date(currentDate1);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setD1text(fDate + ' (' + fTime + ')');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const createNotification = () => {
    
    if (date1 < today){
        Alert.alert("Error 1955", "Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean? \n\nLa fecha de la notificación debe ser en el futuro XD")
    } else if (date1 > today) {

        var diff = new Date(date1).getTime() - new Date(today).getTime();
        var seconds = Math.floor(diff / (1000 * 60));
        console.log("diff: "+diff+ "| segundos: "+seconds);

        Notifications.scheduleNotificationAsync({
            content: {
              title: "Tarea apunto de vencer",
              body: 'Tu tarea está a punto de vencer!!',
            },
            trigger: {
              seconds: seconds,
            },
          });
        
          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: true,
              shouldSetBadge: false,
            }),
          });
    }   
}
  /*
  const showDatepicker = () => {showMode('date'); };
  const showTimepicker = () => {showMode('time');};
*/
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      { /* Picker para tag
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
          onChangeText={(text) => handleChange('nombre', text)}
          placeholder="Nombre de tarea"
          placeholderTextColor={Colors[3]}
        />

        {/*********** Notificaciones *********/}
        <View style={styles.notifications}>
          <Text style={styles.notificationText}>Notificar recordatorio </Text>
          <Switch
          trackColor={{ false: "#767577", true: Colors[1] }}
          thumbColor={switchValue ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={switchValue}
          />
        </View>

        {switchValue ? <View style={styles.container2}>
              <View style={styles.rowContainer}>
                  <Text style={styles.notificationText2}>Recordatorio: </Text>
                  <View style={styles.buttonContainer}>
                      <CustomButton 
                      icon="table" 
                      iconColor="#fff" 
                      style={styles.button} 
                      onPress={() => {showMode('date');}} 
                      text=" Fecha" />
                  </View>
                  <View style={styles.buttonContainer}>
                      <CustomButton 
                      icon="clockcircleo" 
                      iconColor="#fff" 
                      style={styles.button} 
                      onPress={() => {showMode('time');}} 
                      text=" Hora" />
                  </View>
              </View>
              {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Text style={styles.littleNotificationText}>Fecha y hora de la notificación: {d1text}</Text>
          </View> : 
        <Text style={styles.noNotificationText}>{"\n"} Sin fecha de vencimiento ni notificaciones</Text>}

        
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
    justifyContent: 'flex-start'
  },
  container2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
  },
  notifications: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 15,
    fontFamily: 'Ubuntu-Regular',
  },
  noNotificationText: {
    fontSize: 12.5,
    fontFamily: 'Ubuntu-Light',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},
buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 5,
    margin: 5,
},
notifications: {
  flexDirection: 'row',
  alignItems: 'center',
},
notificationText2: {
  fontSize: 15,
  fontFamily: 'Ubuntu-Regular',
  marginRight: 5,
},
littleNotificationText: {
  fontSize: 13,
  paddingTop: 10,
  fontFamily: 'Ubuntu-Regular',
}
});

export default AddTaskScreen;
