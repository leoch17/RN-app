import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";

//Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index";
import HomeScreen from "./HomeScreen";

//Registrar
import { createUser } from "../api/api.tasks";

const cuenta = "¿Ya tienes una cuenta? ";
const ini = " Inicia Sesión";

const RegisterScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Text style={styles.TituloPagina}>Wunderlist</Text>
        <Text style={styles.SubTitulo}>Registro de Cuenta</Text>
        <Text
          style={styles.ContenidoEnlaceTexto}
          onPress={() => navigation.navigate("Home")}>
            Home
          </Text>

        <Formik
          initialValues={{
            nombre: "",
            usuario: "",
            correo: "",
            clave: "",
          }}
          onSubmit={(values) => {
            try {
              console.log(values);
              createUser(values);
              Alert.alert("Registro exitoso", "Su usuario ha sido registrado exitosamente!!")
            navigation.navigate("Login")
            } catch (error) {
              console.log(error)
              Alert.alert("Registro fallido", "No se pudo registrar su usuario :(")
            }
            
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Nombre Completo"
                icon="person"
                placeholder="Luis Acurero"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("nombre")}
                onBlur={handleBlur("nombre")}
                value={values.nombre}
              />

              <MiTextoEntrada
                label="Nombre de Usuario"
                icon="person"
                placeholder="RocketMan20"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("usuario")}
                onBlur={handleBlur("usuario")}
                value={values.usuario}
              />

              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="LuisAcu@gmail.com"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("correo")}
                onBlur={handleBlur("correo")}
                value={values.correo}
                keyboardType="email-address"
              />

              <MiTextoEntrada
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("clave")}
                onBlur={handleBlur("clave")}
                value={values.clave}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <Text style={styles.CajaMensaje}>...</Text>
              <TouchableOpacity
                style={styles.BotonEstilizado}
                onPress={handleSubmit}
              >
                <Text style={styles.BotonTexto}>Regístrate</Text>
              </TouchableOpacity>

              <View style={styles.VistaExtra}>
                <Text style={styles.TextoExtra}>
                  {cuenta}
                  <Text
                    style={styles.ContenidoEnlaceTexto}
                    onPress={() => navigation.navigate("Login")}
                  >
                    {ini}
                  </Text>
                </Text>
              </View>

              <View style={styles.Linea} />
              <View style={styles.Linea} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const MiTextoEntrada = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  ...props
}) => {
  return (
    <View>
      <View style={styles.IconoIzquierdo}>
        <Octicons name={icon} size={30} color={Colors.marca} />
      </View>
      <Text style={styles.EtiquetaEntradaEstilizado}>{label}</Text>
      {!isDate && (
        <TextInput style={styles.TextoEntradaEstilizado} {...props} />
      )}
      {isDate && (
        <TouchableOpacity>
          <TextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <TouchableOpacity
          style={styles.IconoDerecho}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={Colors.luzoscuro}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterScreen;
