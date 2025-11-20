import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import styles from '../style/style.js';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = () => {
    if (email === 'teste@fiap.com.br' && senha === '1234') {
      navigation.replace('App');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logoLogin}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.titulo}>Login</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ecececff"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ecececff"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={[styles.input]}
        />
        <TouchableOpacity onPress={validarLogin} style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
