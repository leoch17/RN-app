import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

// Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index"; 

// Cliente de axios
import axios from 'axios';




const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Text style={styles.TituloPagina}>Wunderlist</Text>
        <Text style={styles.SubTitulo}>Cuenta de Ingreso</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MiTextoEntrada
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={styles.CajaMensaje}>...</Text>
              <TouchableOpacity
                style={styles.BotonEstilizado}
                onPress={() => navigation.navigate("Home")}>
                  <Text style={styles.BotonTexto}>Iniciar Sesión</Text>
              </TouchableOpacity>
                <View style={styles.VistaExtra}>
                  <Text style={styles.TextoExtra}>¿Aún no tienes una cuenta? </Text>

                    <TouchableOpacity style={styles.EnlaceTexto}>
                        <Text
                          style={styles.ContenidoEnlaceTexto}
                          onPress={() => navigation.navigate("Register")}>
                          Regístrate
                        </Text>
                    </TouchableOpacity>

                </View>
              </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const MiTextoEntrada = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props 
}) => {
  return (
    <View>
      <View style={styles.IconoIzquierdo}>
        <Octicons name={icon} size={30} color={Colors.marca} />
      </View>
      <Text style={styles.EtiquetaEntradaEstilizado}>{label}</Text>
      <TextInput style={styles.TextoEntradaEstilizado} {...props} />
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

export default LoginScreen;
