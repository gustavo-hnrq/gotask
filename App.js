import { Text, View } from 'react-native';
import TelaLista from './src/screens/telaLista';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import TelaDentroLista from './src/screens/telaDentroLista';
import { Loading } from './src/components/loading';
import StartPage from './src/screens/startpage';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View className='flex-1 bg-gray-50'>
      <View className='bg-gray-50'>
        <StartPage />
      </ View>
    </View>


  );
}

