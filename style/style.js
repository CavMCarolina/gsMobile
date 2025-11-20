import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Tela de Login
  container: {
    backgroundColor: '#29262cff',
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
    fontFamily: 'Quantico_700Bold',
    color: '#7800ff',
    letterSpacing: 2
  },
  texto: {
    fontSize: 16,
    fontFamily: 'Quantico_400Regular',
    color: '#ecececff',
    letterSpacing: 1.3
  },
  input: {
    marginTop: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#7800ff',
    borderRadius: 5,
    color: '#ecececff',
    fontFamily: 'Quantico_400Regular',
    letterSpacing: 1.3
  },
  botao : {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#7800ff',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontFamily: 'Quantico_400Regular',
    color: '#ecececff',
    letterSpacing: 2
  },
});
