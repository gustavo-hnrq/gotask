import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CardLista from '../components/cardLista';

export default function TelaLista() {
    return(
      
      <View className='h-full px-5 mt-20 pb-14'>
        {/* SEÇÃO DE MESSAGEM BEM-VINDO E PARTE DE CRIAR LISTA */}
        <Text Text className='text-3xl mb-3 font-poppinsBold'>Bem-vindo 👋</Text>
        <Text className='text-lg font-medium text-gray-400 font-poppinsRegular'>Você possui 10 tarefas pendentes</Text>
        {/* BOTÃO ADICIONAR */}
        <View className='items-center justify-center'>
          <TouchableOpacity activeOpacity={0.75} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center '>
            <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Lista</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text className='text-2xl mb-5 font-poppinsBold'>Suas Listas</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <CardLista />
                <CardLista />
                <CardLista />
                <CardLista />
              </View>
            </ScrollView>
        </View> 
      </View>
    );
}