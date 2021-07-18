import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Colors } from "../constants";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddTaskScreen from "../screens/AddTaskScreen"

const TasksStackNavigator = createStackNavigator();

const defautlStyles = {
  headerStyle: {
    backgroundColor: Colors[1],
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Ubuntu-Medium",
  },
};

const styles = StyleSheet.create({
  headerRightSpace: {
    marginRight: 10,
  },
});

const TaskNavigator = () => {

  return (
    <TasksStackNavigator.Navigator>
      <TasksStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...defautlStyles,
          title: "Inicia sesión",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...defautlStyles,
          title: "Tus tareas",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="NewList"
        component={AddTaskScreen}
        options={{ ...defautlStyles, title: "Agregar nueva tarea" }}
      />
    </TasksStackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TaskNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
