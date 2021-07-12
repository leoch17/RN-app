import styled from "styled-components/native";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

//Colores
export const Colores = {
  primario: "#ffffff",
  secundario: "#E5E7EB",
  terciario: "#1F2937",
  luzoscuro: "#9CA3AF",
  marca: "#602BD9",
  verde: "#10B981",
  rojo: "#EF4444",
};

const { primario, secundario, terciario, luzoscuro, marca, verde, rojo } =
  Colores;

export const ContenedorEstilizado = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primario};
`;

export const ContenedorInterno = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const TituloPagina = styled.View`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${marca};
  padding: 10px;
`;

export const SubTitulo = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${terciario};
`;

export const AreaFormularioEstilizado = styled.View`
  width: 90%;
`;

export const TextoEntradaEstilizado = styled.TextInput`
  background-color: ${secundario};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${terciario};
`;

export const EtiquetaEntradaEstilizado = styled.Text`
  color: ${terciario};
  font-size: 13px;
  text-align: left;
`;

export const IconoIzquierdo = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const IconoDerecho = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const BotonEstilizado = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${marca};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const BotonTexto = styled.Text`
  color: ${primario};
  font-size: 16px;
`;

export const CajaMensaje = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Linea = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${luzoscuro};
  margin-vertical: 10px;
`;

export const VistaExtra = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const TextoExtra = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${terciario};
  font-size: 15px;
`;

export const EnlaceTexto = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ContenidoEnlaceTexto = styled.Text`
  color: ${marca};
  font-size: 15px;
`;
