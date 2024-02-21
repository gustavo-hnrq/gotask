import { Text, View } from 'react-native';
import TelaLista from './src/screens/telaLista';
import TelaDentroLista from './src/screens/telaDentroLista';
import StartPage from './src/screens/startpage';
// BIBLIOTECA DE ROTAS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import CardLista from './src/components/cardLista';
import CriarLista from './src/screens/criar_lista';
import CriarTarefa from './src/screens/criar_task';
import TelaAtualizar from './src/screens/tela_atualizar';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  // ROTAS DO APP
  const Rota = createNativeStackNavigator();
  
  return (
    <View className='flex-1 bg-gray-50'>
      <NavigationContainer>
        <Rota.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Startpage'>
          <Rota.Screen name="StartPage" component={StartPage} />
          <Rota.Screen name="TelaLista" component={TelaLista} />
          <Rota.Screen name="CriarLista" component={CriarLista} />
          <Rota.Screen name="CriarTarefa" component={CriarTarefa} />
          <Rota.Screen name="TelaAtualizar" component={TelaAtualizar} />
          <Rota.Screen name="TelaDentroLista" component={TelaDentroLista} />
          <Rota.Screen name="CardLista" component={CardLista} />
        </Rota.Navigator>
       </NavigationContainer>
      </View>


  );
}

