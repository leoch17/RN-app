import React, { useState } from "react";

//Formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

//Estilos
import globalstyles from "../styles/globalstyles";
import { COLORS } from "../constants/theme";

const RegisterUserScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView style={globalstyles.styleContainer}>
      <View style={globalstyles.innerContainer}>
        <Text style={globalstyles.titlePage}>Uber Eats</Text>
        <Text style={globalstyles.subTitle}>Registro de Establecimiento</Text>

        <Formik
          initialValues={{
            fullName: "",
            user: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={globalstyles.styleFormArea}>
              <MyTextInput
                label="Nombre Completo"
                icon="person"
                placeholder="Luis Acurero"
                placeholderTextColor={COLORS.MediumGray}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MyTextInput
                label="Nombre de Usuario"
                icon="person"
                placeholder="RocketMan20"
                placeholderTextColor={COLORS.MediumGray}
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")}
                value={values.user}
              />

              <MyTextInput
                label="Correo Electrónico"
                icon="mail"
                placeholder="LuisAcu@gmail.com"
                placeholderTextColor={COLORS.MediumGray}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={COLORS.MediumGray}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <Text style={globalstyles.messageBox}>...</Text>
              <TouchableOpacity
                style={globalstyles.styleButton}
                onPress={handleSubmit}
              >
                <Text style={globalstyles.textButton}>Regístrate</Text>
              </TouchableOpacity>

              <View style={globalstyles.extraView}>
                <Text style={globalstyles.extraText}>
                  {cuenta}
                  <Text
                    style={globalstyles.contentLinkText}
                    onPress={() => navigation.navigate("Login")}
                  >
                    {ini}
                  </Text>
                </Text>
              </View>

              <View style={globalstyles.Line} />
              <View style={globalstyles.Line} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const MyTextInput = ({
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
      <View style={globalstyles.leftIcon}>
        <Octicons name={icon} size={30} color={COLORS.brand} />
      </View>
      <Text style={globalstyles.styleInputTag}>{label}</Text>
      {!isDate && <TextInput style={globalstyles.textInputStyle} {...props} />}
      {isDate && (
        <TouchableOpacity>
          <TextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <TouchableOpacity
          style={globalstyles.rightIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={COLORS.MediumGray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterUserScreen;
