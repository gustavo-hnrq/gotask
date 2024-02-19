import { Text, View, TouchableOpacity, Image } from "react-native";

export default function StartPage ({navigation}) {
  return(
      <View className='h-full px-5 mt-12 pb-14'>
        <View className='py-5'>
          <Image style={{width:170, height:50, maxHeight:100, resizeMode:'contain'}}  source={require('../../assets/logo.png')} />
        </View>

        <View className='justify-center items-center'>
          <Image style={{width:350, height:200, resizeMode:'contain'}}  source={require('../../assets/ilustracao.png')} />
        </View>

        <Text className='font-poppinsBold text-black text-3xl py-5'>Estamos felizes por ter você aqui, pronto para transformar suas tarefas diárias em conquistas incríveis?</Text>
          {/* BOTÃO ADICIONAR */}
        <View className='items-center justify-center'>
           <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('TelaLista')}
            className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
              <Text className='font-poppinsBold text-white text-lg items-center'>Começar</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}