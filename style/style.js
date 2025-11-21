import { StyleSheet } from 'react-native';

// Cores
const corBG = '#29262cff';
const corTexto = '#ecececff';
const corPrimaria = '#7800ff';
const corSecundaria = '#9237faff';

// Fontes
const textoNormal = 'Quantico_400Regular';
const textoNegrito = 'Quantico_700Bold';

export default StyleSheet.create({
  // Tela de Login
  container: {
    backgroundColor: corBG,
    height: '100%',
    padding: 40,
  },
  loginContainer: {
    justifyContent: 'center',
    marginTop: 50
  },
  logoLogin: {
    width: 285,
    height: 100,
    marginTop: 180
  },
  titulo: {
    fontSize: 24,
    fontFamily: textoNegrito,
    color: corPrimaria,
    letterSpacing: 2
  },
  texto: {
    fontSize: 16,
    fontFamily: textoNormal,
    color: corTexto,
    letterSpacing: 1.3
  },
  input: {
    marginTop: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: corPrimaria,
    borderRadius: 5,
    color: corTexto,
    fontFamily: textoNormal,
    letterSpacing: 1.3
  },
  botao : {
    padding: 15,
    marginTop: 20,
    backgroundColor: corPrimaria,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontFamily: textoNormal,
    color: corTexto,
    letterSpacing: 2
  },
  // Barra de Navegação
  tabBar: {
    backgroundColor: corPrimaria,
    height: 60,
    borderTopWidth: 0,
    paddingTop: 9
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    backgroundColor: corPrimaria,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    width: 65,
    height: 65,
    borderWidth: 5,
    borderColor: corBG,
  },
});
