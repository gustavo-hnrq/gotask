// TelaLista.js
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CardLista from '../components/cardLista';
import api from '../service/api'
import { useEffect, useState } from 'react';

export default function TelaLista({ navigation }) {  
  const [lists, setLists] = useState([]);
 
  useEffect(() => {
    fetchLists(); // Chamada inicial para carregar as listas
  }, []);

  // Função para buscar as listas da API
  const fetchLists = () => {
    api
      .get(`/list`)
      .then((response) => {
        const lista = response.data;
        const lista_tratada = lista.map((item, index) => ({
          nome: item.nomeLista,
          id: index + 1
        }));
        setLists(lista_tratada);
      })
      .catch((error) => {
        console.error("Erro", error);
      });
  };

  return (
    <View className='h-full px-5 mt-20 pb-24'>         
      {/* SEÇÃO DE MESSAGEM BEM-VINDO E PARTE DE CRIAR LISTA */}
      <Text Text className='text-3xl mb-3 font-poppinsBold'>Bem-vindo 👋</Text>
      {/* BOTÃO ADICIONAR */}
      <View className='items-center justify-center'>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('CriarLista')}
          className='bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center '>
          <Text className='font-poppinsBold text-white text-lg items-center'>Adicionar Lista</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className='text-2xl font-poppinsBold'>Suas Listas</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Mapeando e renderizando cada lista */}
          {lists.map((list) => (
            <TouchableOpacity
              key={list.id}
              activeOpacity={0.60}
              onPress={() => navigation.navigate('TelaDentroLista', { listaId: list.id, nomeLista: list.nome })}>
              {/* Passando a função deletar como callback */}
              <CardLista listaId={list.id} onListDelete={() => deletar(list.id)} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> 
    </View>
  );
}
