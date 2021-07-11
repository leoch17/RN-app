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
} from "./../Componentes/styles";
import { View, TouchableOpacity } from "react-native";

//Colores
const { marca, luzoscuro } = Colores;

const Register = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ContenedorEstilizado>
      <StatusBar style="dark" />
      <ContenedorInterno>
        <TituloPagina>Wunderlist</TituloPagina>
        <SubTitulo>Registro de Cuenta</SubTitulo>

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
            <AreaFormularioEstilizado>
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
              <CajaMensaje>...</CajaMensaje>
              <BotonEstilizado onPress={handleSubmit}>
                <BotonTexto>Registrate</BotonTexto>
              </BotonEstilizado>
              <Linea />
              <VistaExtra>
                <TextoExtra>Ya tienes una cuenta?</TextoExtra>
                <EnlaceTexto>
                  <ContenidoEnlaceTexto onPress={handleSubmit}>
                    Iniciar Sesión
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
  isDate,
  ...props
}) => {
  return (
    <View>
      <IconoIzquierdo>
        <Octicons name={icon} size={30} color={marca} />
      </IconoIzquierdo>
      <EtiquetaEntradaEstilizado>{label}</EtiquetaEntradaEstilizado>
      {!isDate && <TextoEntradaEstilizado {...props} />}
      {isDate && (
        <TouchableOpacity>
          <TextoEntradaEstilizado {...props} />
        </TouchableOpacity>
      )}
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

export default Register;
