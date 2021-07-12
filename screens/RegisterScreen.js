import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import { View, TouchableOpacity, Text, TextInput } from "react-native";

import { styles } from "./../styles/styles";

const {
  ContenedorEstilizado,
  ContenedorInterno,
  TituloPagina,
  SubTitulo,
  AreaFormularioEstilizado,
  IconoIzquierdo,
  EtiquetaEntradaEstilizado,
  TextoEntradaEstilizado,
  IconoDerecho,
  BotonEstilizado,
  BotonTexto,
  Colores,
  CajaMensaje,
  Linea,
  VistaExtra,
  TextoExtra,
  EnlaceTexto,
  ContenidoEnlaceTexto,
} = styles;

//Colores
const { marca, luzoscuro } = Colores;

const RegisterScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={ContenedorEstilizado}>
      <View style={ContenedorInterno}>
        <View style={TituloPagina}>Wunderlist</View>
        <Text style={SubTitulo}>Registro de Cuenta</Text>

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
            <View style={AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Nombre Completo"
                icon="person"
                placeholder="Luis Acurero"
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MiTextoEntrada
                label="Nombre de Usuario"
                icon="person"
                placeholder="RocketMan20"
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")}
                value={values.user}
              />

              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="LuisAcu@gmail.com"
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MiTextoEntrada
                label="Fecha de Nacimiento"
                icon="calendar"
                placeholder="DD-MM-AAAA"
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
              />

              <MiTextoEntrada
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={luzoscuro}
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
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={CajaMensaje}>...</Text>
              <TouchableOpacity style={BotonEstilizado} onPress={handleSubmit}>
                <Text style={BotonTexto}>Registrate</Text>
              </TouchableOpacity>
              <View style={Linea} />
              <View style={VistaExtra}>
                <Text style={TextoExtra}>Ya tienes una cuenta? </Text>
                <TouchableOpacity style={EnlaceTexto}>
                  <Text
                    style={ContenidoEnlaceTexto}
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
      <View style={IconoIzquierdo}>
        <Octicons name={icon} size={30} color={marca} />
      </View>
      <Text style={EtiquetaEntradaEstilizado}>{label}</Text>
      {!isDate && <TextInput style={TextoEntradaEstilizado} {...props} />}
      {isDate && (
        <TouchableOpacity>
          <TextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <TouchableOpacity
          style={IconoDerecho}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={luzoscuro}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterScreen;
