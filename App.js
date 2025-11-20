import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as fontes Quantico
import { useFonts, Quantico_400Regular, Quantico_700Bold } from '@expo-google-fonts/quantico';

import TabNavigator from './navigation/TabNavigation.js';
import Login from './components/Login.js';

const Stack = createNativeStackNavigator();

export default function App() {
  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    Quantico_400Regular,
    Quantico_700Bold,
  });

  // Enquanto a fonte não carrega, retorna null ou um splash
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="App"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}