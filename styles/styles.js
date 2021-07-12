
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

export default { 
  contenedorEstilizado: {
  flex: 1,
  padding: 25,
  paddingTop: {StatusBarHeight}+10,
  backgroundColor: Colores.primario,
  },
  contenedorInterno: {
  flex: 1,
  width: "100%",
  alignItems: center,
  },
  tituloPagina: {
    "fontSize": 30,
    "textAlign": "center",
    "fontWeight": "bold",
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10,
    color: Colores.marca
  },
  subTitulo: {
    "fontSize": 18,
    "marginBottom": 20,
    "letterSpacing": 1,
    "fontWeight": "bold",
    color: Colores.terciario,
  },
  areaFormularioEstilizado: {
    width: "90%"
  },
  textoEntradaEstilizado: {
      color: Colores.secundario,
      "paddingTop": 15,
      "paddingRight": 55,
      "paddingBottom": 15,
      "paddingLeft": 55,
      "borderTopLeftRadius": 5,
      "borderTopRightRadius": 5,
      "borderBottomRightRadius": 5,
      "borderBottomLeftRadius": 5,
      "fontSize": 16,
      "height": 60,
      "marginVertical": 3,
      "marginBottom": 10,
      color: Colores.terciario
  },
  etiquetaEntradaEstilizado: {
    color: Colores.terciario,
    "fontSize": 13,
    "textAlign": "left"
  },
  iconoIzquierdo: {
    "left": 15,
    "top": 38,
    "position": "absolute",
    "zIndex": 1
  },
  iconoDerecho: {
    "right": 15,
    "top": 38,
    "position": "absolute",
    "zIndex": 1
  },
  botonEstilizado: {
    backgroundColor: Colores.marca,
    "paddingTop": 15,
    "paddingRight": 15,
    "paddingBottom": 15,
    "paddingLeft": 15,
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "marginVertical": 5,
    "height": 60
  },
  botonTexto: {
    fontSize: 16,
    color: Colores.terciario
  },
  cajaMensaje: {
    textAlign: center,
    fontSize: 13,
  },
  linea: {
      "height": 1,
      "width": "100%",
      "marginVertical": 10,
      color: Colores.luzoscuro,
  },
  vistaExtra: {
      "justifyContent": "center",
      "flexDirection": "row",
      "alignItems": "center",
      "paddingTop": 10,
      "paddingRight": 10,
      "paddingBottom": 10,
      "paddingLeft": 10
    },
    textoExtra: {
        "justifyContent": "center",
        "alignContent": "center",
        "fontSize": 15,
        color: Colores.terciario,
    },
    enlaceTexto: {
      justifyContent: center,
      alignItems: center,
    },
    contenidoEnlaceTexto: { 
      color: Colores.marca,
      fontSize: 15
  }
}

/*

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

*/
