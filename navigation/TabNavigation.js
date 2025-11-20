import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Perfil from '../components/Perfil.js';
import Exercicios from '../components/Exercicios.js';
import Cursos from '../components/Cursos.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trilhas" component={Home}/>
      <Tab.Screen name="Treine" component={Exercicios}/>
      <Tab.Screen name="Meus Cursos" component={Cursos}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
  );
}
