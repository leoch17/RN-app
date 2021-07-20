import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";

import { Colors } from "../constants";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddTaskScreen from "../screens/AddTaskScreen";
import UpdateTaskScreen from "../screens/UpdateTaskScreen";
import TaskScreen from "../screens/TaskScreen";

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
        name="NewTask"
        component={AddTaskScreen}
        options={{ ...defautlStyles, title: "Agregar nueva tarea" }}
      />

      <TasksStackNavigator.Screen
        name="Update"
        component={UpdateTaskScreen}
        options={{
          ...defautlStyles,
          title: "Editar Tareas",
          headerTitleAlign: "center",
        }}
      />

      <TasksStackNavigator.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          ...defautlStyles,
          title: "Tarea",
          headerTitleAlign: "center",
        }}
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
