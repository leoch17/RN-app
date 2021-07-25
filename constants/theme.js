import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  //Colores base
  primary: "#0000FF",
  secondary: "#800080",

  //Colores
  black: "#000000",
  white: "#FFFFFF",

  LightGray: "#F5F5F6",
  LightGray2: "#F6F6F7",
  LightGray3: "#EFEFF1",
  LightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgrey: "#898C95",
};

export const SIZES = {
  //Tamaños globales
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  //Tamaños de fuentes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  //Dimensiones de app
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 40,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
