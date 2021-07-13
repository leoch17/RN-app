import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import { View, TouchableOpacity, Text, TextInput } from "react-native";

import styles, { Colores } from "./../styles/styles";


const RegisterScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Text style={styles.TituloPagina}>Wunderlist</Text>
        <Text style={styles.SubTitulo}>Registro de Cuenta</Text>

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
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MiTextoEntrada
                label="Nombre de Usuario"
                icon="person"
                placeholder="RocketMan20"
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")}
                value={values.user}
              />

              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="LuisAcu@gmail.com"
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MiTextoEntrada
                label="Fecha de Nacimiento"
                icon="calendar"
                placeholder="DD-MM-AAAA"
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
              />

              <MiTextoEntrada
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MiTextoEntrada
                label="Confirma Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={Colores.luzoscuro}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={styles.CajaMensaje}>...</Text>
              <TouchableOpacity style={styles.BotonEstilizado} onPress={handleSubmit}>
                <Text style={styles.BotonTexto}>Registrate</Text>
              </TouchableOpacity>
              <View style={styles.Linea} />
              <View style={styles.VistaExtra}>
                <Text style={styles.TextoExtra}>Ya tienes una cuenta? </Text>
                <TouchableOpacity style={styles.EnlaceTexto}>
                  <Text
                    style={styles.ContenidoEnlaceTexto}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Iniciar Sesión
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
  isDate,
  ...props
}) => {
  return (
    <View>
      <View style={styles.IconoIzquierdo}>
        <Octicons name={icon} size={30} color={Colores.marca} />
      </View>
      <Text style={styles.EtiquetaEntradaEstilizado}>{label}</Text>
      {!isDate && <TextInput style={styles.TextoEntradaEstilizado} {...props} />}
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
            color={Colores.luzoscuro}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterScreen;
