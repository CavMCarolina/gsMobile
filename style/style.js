import { StyleSheet } from 'react-native';

// Cores
const corBG = '#29262cff';
const corTextoClaro = '#ecececff';
const corPrimaria = '#7800ff';
const corTextoEscuro = '#333333ff';

// Fontes
const textoNormal = 'Quantico_400Regular';
const textoNegrito = 'Quantico_700Bold';

export default StyleSheet.create({
  // Tela de Login
  loginBG: {
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
    letterSpacing: 2,
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    fontFamily: textoNormal,
    color: corTextoClaro,
    letterSpacing: 1.3
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: corPrimaria,
    borderRadius: 5,
    color: corTextoClaro,
    fontFamily: textoNormal,
    letterSpacing: 1.3
  },
  botao : {
    padding: 15,
    backgroundColor: corPrimaria,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontFamily: textoNormal,
    color: corTextoClaro,
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
  // Tela Home
  container: {
    backgroundColor: corBG,
    padding: 20,
    paddingTop: 70
  },
  pickerContainer: {
    backgroundColor: corBG, 
    borderWidth: 1,  
    overflow: 'hidden', 
    borderColor: corPrimaria,
    borderRadius: 50,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: corTextoClaro,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitulo: {
    fontSize: 20,
    fontFamily: textoNegrito,
    color: corPrimaria,
  },
  cardCarga: {
    fontSize: 14,
    fontFamily: textoNormal,
    color: corPrimaria,
  },
  cardDescricao: {
    fontSize: 16,
    fontFamily: textoNormal,
    color: corTextoEscuro,
    marginTop: 8,
    marginBottom: 20
  }, 
  // Tela Exercícios
  exercicioContainer: {
    alignItems: 'center'
  },
  bolinha: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: corPrimaria,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: 8
  },
  tituloBolinha: {
    color: corTextoClaro,
    fontFamily: textoNegrito,
    fontSize: 20,
  },
  linha :{
    width: 4,
    height: 40,
    backgroundColor: corPrimaria,
    marginVertical: 30
  },
  // Tela Meus Cursos
  progressBar: {
    height: 12,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: corPrimaria,
  },
  botaoCertificado: {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#9237fa', // cor diferente para destacar
    borderRadius: 5,
    alignItems: 'center',
  }
});

