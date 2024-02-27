import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
// import { Button, Icon } from 'react-native-magnus';
import Icone from 'react-native-vector-icons/Feather';
import axios from "axios";

export default function CriarLista ({navigation}) {

    const [Nome, setNome] = useState('')
   
    const enviar = (e) => {

        axios.post('http://172.16.2.185:3000/listP',{ 
            nomeList: Nome,
           })  
    }
    
    return(

        <View className='h-full px-5 mt-20 pb-14'>
            <View className='flex-row justify-between items-center'>
                <Text className='text-3xl mt-5 font-poppinsBold'>Criar Lista</Text>

                <View>
                    <TouchableOpacity activeOpacity={0.50} className='flex-row align-center items-center' onPress={() => navigation.goBack()}>
                        <Icone name="chevron-left" size={26} color="#D047FF" />
                        <Text className='text-fuchsia-500 text-lg'>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text className='text-xl mt-5 font-poppinsMedium'>Nome da lista</Text>
                <TextInput className='border border-gray-300 mt-4 rounded-md p-3 py-5 text-xl bg-white' placeholder='Nome da sua nova lista...' maxLength={28} value={Nome} onChangeText={(text) => setNome(text)}/>
            </View>

            <View className='items-center justify-center'>
            <TouchableOpacity activeOpacity={0.75} onPress={enviar} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
                    <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}