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
  ActivityIndicator,
} from "react-native";

//Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index";

const cuenta = "¿Ya tienes una cuenta? ";
const ini = " Inicia Sesión";

const RegisterScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //form handling
  const handleRegisterScreen = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://wunderlist-back.herokuapp.com/";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home", { ...data });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.JSON());
        setSubmitting(false);
        handleMessage(
          "Ha ocurrido un error. Revisa tu conexión e intentalo de nuevo"
        );
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <ScrollView style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Text style={styles.TituloPagina}>Wunderlist</Text>
        <Text style={styles.SubTitulo}>Registro de Cuenta</Text>
        <Text style={styles.ContenidoEnlaceTexto}>Home</Text>

        <Formik
          initialValues={{
            fullName: "",
            user: "",
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.email == "" ||
              values.password == "" ||
              values.name == "" ||
              values.user == ""
            ) {
              handleMessage("Por favor llenar todos los campos");
              setSubmitting(false);
            } else {
              handleRegisterScreen(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
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

              <Text style={styles.CajaMensaje} type={messageType}>
                {message}
              </Text>

              {!isSubmitting && (
                <TouchableOpacity
                  style={styles.BotonEstilizado}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.BotonTexto}>Regístrate</Text>
                </TouchableOpacity>
              )}

              {!isSubmitting && (
                <TouchableOpacity
                  disabled={true}
                  style={styles.BotonEstilizado}
                >
                  <TouchableOpacity style={styles.ActivityIndicator} />
                </TouchableOpacity>
              )}

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
