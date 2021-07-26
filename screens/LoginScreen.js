import React, { useState } from "react";

//Iconos
import { Octicons, Ionicos } from "@expo/vector-icons";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

//Formik
import { Formik } from "formik";

//Estilos
import globalstyles from "../styles/globalstyles";
import { COLORS } from "../constants/theme";

const LoginScreen = (navigation) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={globalstyles.styleContainer}>
      <View style={globalstyles.innerContainer}>
        <Text style={globalstyles.titlePage}>Uber Eats</Text>
        <Text style={globalstyles.subTitle}>Inicio de Sesión</Text>

        <Formik
          initialvalues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, hanldeBlur, values }) => (
            <View style={globalstyles.styleFormArea}>
              <MyTextInput
                label="Correo Electronico"
                icon="mail"
                placeholder="LuisAcurero@gmail.com"
                placeholderTextColor={COLORS.MediumGray}
                onChageText={handleChange("email")}
                onBlur={hanldeBlur("email")}
                value={values.email}
                keyboardType="email=address"
              />

              <MyTextInput
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={COLORS.MediumGray}
                onChageText={handleChange("password")}
                onBlur={hanldeBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={globalstyles.messageBox}>...</Text>
              <TouchableOpacity
                style={globalstyles.styleButton}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={globalstyles.textButton}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <View style={globalstyles.extraView}>
                <Text style={globalstyles.extraText}>
                  Aun no tienes cuenta? Elige una opción de registro
                </Text>

                <TouchableOpacity style={globalstyles.linkText}>
                  <Text
                    style={globalstyles.contentLinkText}
                    onPress={() => navigation.navigate("Register")}
                  >
                    Registrate como Usuario
                  </Text>
                  <Text
                    style={globalstyles.contentLinkText}
                    onPress={() => navigation.navigate("RegisterEstablishment")}
                  >
                    Registra tu Establecimiento
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ;
        </Formik>
      </View>
    </View>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <View style={globalstyles.leftIcon}>
        <Octicons name={icon} size={30} color={COLORS.brand} />
      </View>
      <Text style={globalstyles.styleInputTag}>{label}</Text>
      <TextInput style={globalstyles.textInputStyle} {...props} />
      {isPassword && (
        <TouchableOpacity
          style={globalstyles.rightIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicos
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={COLORS.MediumGray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginScreen;
