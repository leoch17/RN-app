import React, { useState } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, TextInput,
  Keyboard, Alert, Picker, Text, Button, Switch, SwitchComponent, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import * as Notifications from 'expo-notifications';

export const createNotification = () => {
    if (date1 < today){
        Alert.alert("Error 1955: Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean?", "La fecha de la notificación debe der en el futuro XD")
    } else if (date1 > today) {

        var diff = new Date(date1).getTime() - new Date(today).getTime();
        var hours = Math.floor(diff / (1000 * 60 * 60 * 24));
        console.log(hours);

        Notifications.scheduleNotificationAsync({
            content: {
              title: "Tarea apunto de vencer",
              body: 'Tu tarea está a punto de vencer!!',
            },
            trigger: {
              hour: hours,
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
  

const NotificationPicker = () => {




  const today = new Date();

  const [date1, setDate1] = useState(today);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [d1text, setD1text] = useState('Sin establecer');

  const onChange = (event, selectedDate) => {
    const currentDate1 = selectedDate || date1;
    console.log(today);
    console.log(date1);
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

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  /*
  const notificationHelper = () = {
      return (date1)
  }
  */

  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Text style={styles.notificationText}>Recordatorio: </Text>
            <View style={styles.buttonContainer}>
                <CustomButton icon="table" iconColor="#fff" style={styles.button} onPress={showDatepicker} text=" Fecha" />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton icon="clockcircleo" iconColor="#fff" style={styles.button} onPress={showTimepicker} text=" Hora" />
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
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      margin: 10,
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
    notificationText: {
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

export default NotificationPicker;