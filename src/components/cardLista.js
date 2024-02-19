import { Text, View, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Feather';

export default function CardLista () {
  const texto = 'Esse é um belo nome de lista';
  const limiteCaracteres = 20; // Número máximo de caracteres
  const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');
  
  return(
    <View className='border border-gray-300 rounded-lg p-4 mt-4 bg-white justify-between flex-row'>
      <View>
        <Text className='text-lg font-poppinsMedium'>{textoLimitado}</Text>
        <Text className='text-sm text-gray-400 font-poppinsMedium'>Tarefas Completas: 0</Text>
      </View>

      <View className='justify-center'>
        <TouchableOpacity activeOpacity={0.75}>
          <Icon name="trash" size={26} color="#d946ef" />
        </TouchableOpacity>
      </View>
  </View>
  )
}