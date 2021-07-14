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
} from "react-native";

//Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index";

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
            fullName: "",
            user: "",
            email: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Nombre Completo"
                icon="person"
                placeholder="Luis Acurero"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MiTextoEntrada
                label="Nombre de Usuario"
                icon="person"
                placeholder="RocketMan20"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")}
                value={values.user}
              />

              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="LuisAcu@gmail.com"
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
