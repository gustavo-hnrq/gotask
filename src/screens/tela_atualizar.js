import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icone from 'react-native-vector-icons/Feather';



export default function TelaAtualizar ({navigation}) {
    
    return(

        <View className='bg-[#F9F9F9]'>
            <View className='flex-row justify-between items-center'>
                <Text className='text-3xl  font-extrabold'>Nome da Tarefa</Text>

                <View>
                    <TouchableOpacity activeOpacity={0.50} className='flex-row align-center items-center' onPress={() => navigation.goBack()}>
                        <Icone name="chevron-left" size={26} color="#D047FF" />
                        <Text className='text-fuchsia-500 text-lg'>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className='text-lx mt-1 font-bold text-gray-400'>Edite sua tarefa</Text>

            
            <View className='mt-5'>
                <Text className='text-xl mt-5 font-extrabold' >Titulo</Text>
                <TextInput className='mt-2 border-solid border-2 border-gray-300 rounded-md p-2	' placeholder='Escreva o nome da sua tarefa...'/>
            </View>

            <View className='mt-5'>
                <Text className='text-xl mt-5 font-extrabold' >Categoria</Text>
                <TextInput className='mt-2 border-solid border-2 border-gray-300 rounded-md p-2' placeholder='Selecione a categoria'/>
            </View>

            <View className='mt-5'>
                <Text className='text-xl mt-5 font-extrabold' >Descrição</Text>
                <TextInput className='mt-2 border-solid border-2 border-gray-300 rounded-md p-2 pb-20' placeholder='Escreva aqui a descrição da sua tarefa...'/>
            </View>

            <View className='justify-center mt-5'>
              <TouchableOpacity activeOpacity={0.50} className='mt-5 bg-[#D047FF] p-4 rounded-md'><Text className='text-white text-center'>CRIAR</Text></TouchableOpacity>
            </View>
        </View>
        

    )

}