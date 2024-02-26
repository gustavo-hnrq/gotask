import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icone from 'react-native-vector-icons/Feather';


export default function TelaAtualizar ({navigation}) {
    
    return(
        <View className='h-full px-5 mt-16'>
            <View className='flex-row justify-between items-center'>
                <Text className='text-3xl font-poppinsBold'>Nome da Tarefa</Text>

                <View>
                    <TouchableOpacity activeOpacity={0.50} className='flex-row align-center items-center' onPress={() => navigation.goBack()}>
                        <Icone name="chevron-left" size={26} color="#D047FF" />
                        <Text className='text-fuchsia-500 text-lg font-poppinsMedium'>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className='text-xl mt-1 font-poppinsMedium text-gray-400'>Edite sua tarefa</Text>

            
            <View className='mt-5'>
                <Text className='text-xl mt-5 font-poppinsMedium ' >Titulo</Text>
                <TextInput className='border border-gray-300 mt-4 rounded-md p-3 py-5 text-xl bg-white	' placeholder='Escreva o nome da sua tarefa...'/>
            </View>

            <View>
                <Text className='text-xl mt-5 font-poppinsMedium ' >Descrição</Text>
                <TextInput className='border border-gray-300 bg-white mt-4 rounded-md p-3 py-5 text-xl' placeholder='Escreva aqui a descrição da sua tarefa...' maxLength={112} multiline={true} />
            </View>

            <View>
                <Text className='text-xl mt-5 font-poppinsMedium ' >Categoria</Text>
                <TextInput className='border border-gray-300 mt-4 rounded-md p-3 py-5 text-xl bg-white' placeholder='Selecione a categoria'/>
            </View>

            <View className='items-center justify-center mt-5'>
                <TouchableOpacity activeOpacity={0.75} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
                        <Text className='font-poppinsBold text-white text-lg items-center'>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
        

    )

}