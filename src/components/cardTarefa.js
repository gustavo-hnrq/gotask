import { Text, View, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Feather';

export default function CardTarefa () {
  const texto = 'Esse é um belo de exemplo de task possivelmente grande';
  const limiteCaracteres = 23; // Número máximo de caracteres
  const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');     // Limita o texto ao número máximo de caracteres

  return(
      <View>
        <View className='border border-gray-300 mt-4 rounded-md p-3 py-6 bg-white justify-between flex-row align-center items-center'>
          {/* BOTÃO CHECK TAREFA */}
           <TouchableOpacity activeOpacity={0.50} className='ml-1'>
              <Icon name="square" size={25} color="black" />
            </TouchableOpacity>

            <View>
              <Text className='text-lg font-poppinsRegular mt-1'>{textoLimitado}</Text>
            </View>

            <View >
              <TouchableOpacity activeOpacity={0.50}>
                <Icon name="trash" size={25} color="#d946ef" />
              </TouchableOpacity>
            </View>
        </View>
      </View>

      
      
  );
}