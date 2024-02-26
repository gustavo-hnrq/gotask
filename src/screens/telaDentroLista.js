import { Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import CardTarefa from '../components/cardTarefa';


export default function TelaDentroLista({navigation}) {
    const texto = 'Nome da Lista';
    const limiteCaracteres = 19; // Número máximo de caracteres
    const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');

    return(
        <View className='h-full px-5 mt-16'>
            <View>
                <TouchableOpacity activeOpacity={0.50} className='flex-row align-center items-center' onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={26} color="#d946ef" />
                    <Text 
                    className='text-fuchsia-500 text-lg font-poppinsRegular'>Voltar</Text>
                </TouchableOpacity>
            </View>

            {/* INFOS DA LISTA */}
            <View className='flex-row align-center items-center'>
                <TextInput maxLength={19} cursorColor={'black'} multiline={false} className='text-3xl mt-5 mb-3 font-poppinsBold'>{textoLimitado}</TextInput>
            </View>
            <Text className='text-lg text-gray-400 font-poppinsRegular'>Tarefas Completas: X</Text>

            {/* BOTÃO ADICIONAR */}
            <View className='items-center justify-center'>
                <TouchableOpacity
                onPress={() => navigation.navigate('CriarTarefa')}
                activeOpacity={0.75} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
                    <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            

            <ScrollView showsVerticalScrollIndicator={false} className='mb-20'>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('TelaAtualizar')}>
                        <CardTarefa />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
  );
}