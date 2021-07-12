import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import {
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
} from "../styles/styles";
import { View } from "react-native";

//Colores
const { marca, luzoscuro } = Colores;

const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ContenedorEstilizado>
      <StatusBar style="dark" />
      <ContenedorInterno>
        <TituloPagina>Wunderlist</TituloPagina>
        <SubTitulo>Cuenta de Ingreso</SubTitulo>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <AreaFormularioEstilizado>
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
              <CajaMensaje>...</CajaMensaje>
              <BotonEstilizado onPress={() => navigation.navigate('Home')}>
                <BotonTexto>Iniciar Sesión</BotonTexto>
              </BotonEstilizado>
              <Linea />
              <VistaExtra>
                <TextoExtra>Aun no tienes una cuenta? </TextoExtra>
                <EnlaceTexto>
                  <ContenidoEnlaceTexto onPress={() => navigation.navigate('Register')}>
                     Registrate
                  </ContenidoEnlaceTexto>
                </EnlaceTexto>
              </VistaExtra>
            </AreaFormularioEstilizado>
          )}
        </Formik>
      </ContenedorInterno>
    </ContenedorEstilizado>
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
      <IconoIzquierdo>
        <Octicons name={icon} size={30} color={marca} />
      </IconoIzquierdo>
      <EtiquetaEntradaEstilizado>{label}</EtiquetaEntradaEstilizado>
      <TextoEntradaEstilizado {...props} />
      {isPassword && (
        <IconoDerecho onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={luzoscuro}
          />
        </IconoDerecho>
      )}
    </View>
  );
};

export default LoginScreen;
