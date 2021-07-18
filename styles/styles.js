import Constants from "expo-constants";

//const StatusBarHeight = Constants.statusBarHeight;

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

//paddingTop: { StatusBarHeight } + 10,

export default {
  ContenedorEstilizado: {
    flex: 1,
    padding: 25,
    backgroundColor: Colores.primario,
  },
  ContenedorInterno: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  TituloPagina: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: Colores.marca,
  },
  SubTitulo: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: Colores.terciario,
  },
  AreaFormularioEstilizado: {
    width: "90%",
  },
  TextoEntradaEstilizado: {
    color: Colores.secundario,
    paddingTop: 15,
    paddingRight: 55,
    paddingBottom: 15,
    paddingLeft: 55,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: Colores.terciario,
  },
  EtiquetaEntradaEstilizado: {
    color: Colores.terciario,
    fontSize: 13,
    textAlign: "left",
  },
  IconoIzquierdo: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  IconoDerecho: {
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  BotonEstilizado: {
    backgroundColor: Colores.marca,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  BotonTexto: {
    fontSize: 16,
    color: "white",
    padding: 25,
  },
  CajaMensaje: {
    textAlign: "center",
    fontSize: 13,
  },
  Linea: {
    height: 1,
    width: "100%",
    marginVertical: 10,
    color: Colores.luzoscuro,
  },
  VistaExtra: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  TextoExtra: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 15,
    color: Colores.terciario,
  },
  EnlaceTexto: {
    justifyContent: "center",
    alignItems: "center",
  },
  ContenidoEnlaceTexto: {
    color: Colores.marca,
    fontSize: 15,
  },
  ActivityIndicator: {
    size: "large",
    color: Colores.primario,
  },
};
