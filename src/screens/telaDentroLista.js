import { Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import CardTarefa from '../components/cardTarefa';
import React, {useEffect, useState} from 'react';
import api from '../service/api';


export default function TelaDentroLista({navigation, route, taskId}) {
    const texto = 'Nome da Lista';
    const limiteCaracteres = 19; // NÃºmero mÃ¡ximo de caracteres
    const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '' : '');

    const { nomeLista, listaId } = route.params;

    const [tarefa, setTarefa] = useState([]);
    const [nome, setNome] = useState("");  

  useEffect(() => {
    fetchTasks(); // Chamada inicial para carregar as listas
  }, []);

  // FunÃ§Ã£o para buscar as listas da API
  const fetchTasks = () => {
    api
      .get(`/taskLista/${listaId}`)
      .then((response) => {
        const tarefa = response.data[0];
        const tarefa_tratada = tarefa.map((item, index) => ({
          nome: item.nomeTarefa,
          id: index + 1
        }));
        setTarefa(tarefa_tratada);
        const selectedTask = tarefa_tratada.find(item => item.id === taskId);
        if (selectedTask) {
          setNome(selectedTask.nome);
         
        }
      })
      .catch((error) => {
        console.error("Erro", error);
      });
  };


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
                <TextInput maxLength={19} cursorColor={'black'} multiline={false} className='text-3xl mt-5 mb-3 font-poppinsBold'>{nomeLista}</TextInput>
            </View>

            {/* BOTÃƒO ADICIONAR */}
            <View className='items-center justify-center'>
                <TouchableOpacity
                onPress={() => navigation.navigate(`CriarTarefa`, {id: listaId})}
                activeOpacity={0.75} className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
                    <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} className='mb-20'>
              <View>
                {tarefa.map((tarefa) => (
                  <TouchableOpacity key={tarefa.id} onPress={() => navigation.navigate('TelaAtualizar', { taskId: tarefa.id, listaId })}>
                    <CardTarefa taskId={tarefa.id} listaId={listaId} onListDelete={() => deletar(listaId)}   />
                  </TouchableOpacity>
                 ))}
              </View>
            </ScrollView>
        </View>
    );
}