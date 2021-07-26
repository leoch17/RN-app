import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-native";
import { StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import { COLORS } from "../constants/theme";
import LoginScreen from "../screens/LoginScreen";
import RegisterUserScreen from "../screens/RegisterUserScreen";
import RegisterEstablishmentScreen from "../screens/RegisterEstablishmentsScreen";

const StackNavigator = createStackNavigator();

const defautlStyles = {
  headerStyle: {
    backgroundColor: COLORS.bluishpurple,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontFamily: "Ubuntu-Medium",
  },
};

const styles = StyleSheet.create({
  headerRightSpace: {
    marginRight: 10,
  },
});

const ProductNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Register"
        component={RegisterUserScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="RegisterEstablishment"
        component={RegisterEstablishmentScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...defautlStyles,
          title: "Inicia sesión",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...defautlStyles,
          headerTitleAlign: "center",
        }}
      />
    </StackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return <ProductNavigator />;
};

const AppNavigator = createStackNavigator(StackNavigator);

export default createAppContainer(AppNavigator);
