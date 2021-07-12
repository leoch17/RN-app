import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

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

const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={ContenedorEstilizado}>
      <View style={ContenedorInterno}>
        <View style={TituloPagina}>Wunderlist</View>
        <Text style={SubTitulo}>Cuenta de Ingreso</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={luzoscuro}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
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
              <Text style={CajaMensaje}>...</Text>
              <TouchableOpacity
                style={BotonEstilizado}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={BotonTexto}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <View style={Linea} />
              <View style={VistaExtra}>
                <Text style={TextoExtra}>Aun no tienes una cuenta? </Text>
                <TouchableOpacity style={EnlaceTexto}>
                  <Text
                    style={ContenidoEnlaceTexto}
                    onPress={() => navigation.navigate("Register")}
                  >
                    Registrate
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
      <View style={IconoIzquierdo}>
        <Octicons name={icon} size={30} color={marca} />
      </View>
      <Text style={EtiquetaEntradaEstilizado}>{label}</Text>
      <TextInput style={TextoEntradaEstilizado} {...props} />
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

export default LoginScreen;
