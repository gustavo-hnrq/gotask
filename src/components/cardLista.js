import { Text, View, TouchableOpacity, TextInput,Modal} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function CardLista() {
  const texto = 'Nome da Lista';
  const limiteCaracteres = 19; // Número máximo de caracteres
  const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');
  const [modalVisible, setModalVisible] = useState(false);

  const [list, setLists] = useState('');

  
  useEffect(() => {

    axios.get(`http://172.16.2.8:3000/list`)
      .then(response => {
        const lista = response.data
        
        const lista_tratada = []

        for (let index = 0; index < lista.length; index++) {
          lista_tratada[index] = lista[index].nomeLista
          
          setLists(lista_tratada)
         
        }
   
      })
      .catch(error => {
        console.error('Erro', error);
      });
  }, []);
  
  return(
    <View className='border border-gray-300 rounded-lg p-4 mt-4 bg-white justify-between flex-row'>
        <View>
            <TextInput
            maxLength={19}
            className='text-lg font-poppinsMedium'>{list}</TextInput>
          <Text className='text-sm text-gray-400 font-poppinsMedium'>Tarefas Completas: X</Text>
        </View>

      <View className='justify-center'>
        <TouchableOpacity activeOpacity={0.40} onPress={() => setModalVisible(true)} className='w-8 h-8 justify-center items-center'>
          <Icon name="trash" size={26} color="#d946ef" />
          <View className='absolute bg-fuchsia-500 h-9 w-9 opacity-20 rounded-full' />
        </TouchableOpacity>
      </View>

      {/* MODAL DE APAGAR */}

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View className="flex bg-white w-72 h-52 border border-gray-300 rounded-2xl p-10 drop-shadow-md mt-72 items-center self-center">
             
              <Text className="text-center  text-black text-lg font-medium mb-3">Tem certeza que deseja apagar esta lista?</Text>
              <View className="flex flex-row ">
                <TouchableOpacity
                  className="rounded-2xl bg-[#d946ef] p-2 m-5"
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text className="text-sm align-center self-center text-white">CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="rounded-2xl bg-[#d946ef] p-2 m-5"
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text className="text-sm align-center self-center text-white">CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
      

  </View>
  )
}