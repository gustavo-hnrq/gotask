import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import CardTarefa from '../components/cardTarefa';

export default function TelaDentroLista({navigation}) {
    return(
        <View className='h-full px-5 mt-20 pb-14'>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('TelaLista')}
                activeOpacity={0.50} 
                className='flex-row align-center items-center'>
                    <Icon name="chevron-left" size={26} color="#d946ef" />
                    <Text 
                    className='text-fuchsia-500 text-lg font-poppinsRegular'>Voltar</Text>
                </TouchableOpacity>
            </View>

            {/* INFOS DA LISTA */}
            <Text className='text-3xl mt-5 mb-3 font-poppinsBold'>Nome da Lista</Text>
            <Text className='text-lg text-gray-400 font-poppinsRegular'>Tarefas Completas: 0</Text>

            {/* BOTÃO ADICIONAR */}
            <View className='items-center justify-center'>
                <TouchableOpacity activeOpacity={0.75} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
                    <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                <View>
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                    <CardTarefa />
                </View>
            </ScrollView>

        </View>
  );
}