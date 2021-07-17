import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import HomeScreen from "../screens/HomeScreen";
import AddListScreen from "../screens/AddListScreen";
import ListScreen from "../screens/ListScreen";
import { Colors } from "../constants";
import { deleteList } from "../store/actions/listActions";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeS from "../screens/HomeS";
import AddListS from "../screens/AddListS";

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
  const dispatch = useDispatch();

  const deleteListClickHandler = (id, navigation) => {
    Alert.alert(
      "Eliminar lista",
      "¿Estas seguro de que quieres eliminar esta lista?",
      [
        { text: "Cancelar" },
        { text: "Eliminar", onPress: () => deleteListHandler(id, navigation) },
      ]
    );
  };

  const deleteListHandler = (id, navigation) => {
    dispatch(
      deleteList(id, () => {
        navigation.goBack();
        ToastAndroid.show(
          "Lista eliminada Satisfactoriamente!",
          ToastAndroid.LONG
        );
      })
    );
  };

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
          title: "Tus listas",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="HomeS"
        component={HomeS}
        options={{
          ...defautlStyles,
          title: "Tus listas",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="NewList"
        component={AddListScreen}
        options={{ ...defautlStyles, title: "Agregar nueva lista" }}
      />
      <TasksStackNavigator.Screen
        name="NewListS"
        component={AddListS}
        options={{ ...defautlStyles, title: "Agregar nueva lista" }}
      />
      <TasksStackNavigator.Screen
        name="List"
        component={ListScreen}
        options={({ route, navigation }) => ({
          ...defautlStyles,
          title: route.params.name,
          headerRight: () => (
            <View style={styles.headerRightSpace}>
              <Icon
                name="md-trash"
                color="#fff"
                size={30}
                onPress={() =>
                  deleteListClickHandler(route.params.id, navigation)
                }
              />
            </View>
          ),
        })}
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
