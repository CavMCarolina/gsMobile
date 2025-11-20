import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = () => {
    if (email === 'teste@fiap.com.br' && senha === '1234') {
      navigation.replace('App');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>
      <Text style={{ fontSize:22, marginBottom:20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth:1, marginBottom:10, padding:8 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ borderWidth:1, marginBottom:10, padding:8 }}
      />
      <Button title="Entrar" onPress={validarLogin} />
    </View>
  );
}
