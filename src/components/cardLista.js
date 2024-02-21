import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/Feather';


export default function CardLista() {
  const texto = 'Nome da Lista';
  const limiteCaracteres = 19; // Número máximo de caracteres
  const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');

  
  return(
    <View className='border border-gray-300 rounded-lg p-4 mt-4 bg-white justify-between flex-row'>
        <View>
            <TextInput
            maxLength={19}
            className='text-lg font-poppinsMedium'>{textoLimitado}</TextInput>
          <Text className='text-sm text-gray-400 font-poppinsMedium'>Tarefas Completas: X</Text>
        </View>

      <View className='justify-center'>
        <TouchableOpacity activeOpacity={0.40} className='w-8 h-8 justify-center items-center'>
          <Icon name="trash" size={26} color="#d946ef" />
          <View className='absolute bg-fuchsia-500 h-9 w-9 opacity-20 rounded-full' />
        </TouchableOpacity>
      </View>

  </View>
  )
}