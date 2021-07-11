import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Pantallas
import Login from "./Pantallas/Login";

import Register from "./Pantallas/Register";

export default function App() {
  return <Register />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
