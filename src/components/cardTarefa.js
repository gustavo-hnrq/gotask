import { Text, View, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function CardTarefa ({navigation}) {
  const texto = 'Esse é um belo de exemplo de task possivelmente grande';
  const limiteCaracteres = 28; // Número máximo de caracteres
  const textoLimitado = texto.slice(0, limiteCaracteres) + (texto.length > limiteCaracteres ? '...' : '');     // Limita o texto ao número máximo de caracteres

  // SETAR TAREFA COMO FEITA OU NÃO FEITA
  const [checked, setChecked] = useState(false);
  const handleCheckClick = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    
    axios.get(`http://172.16.2.8:3000/task`)
      .then(response => {
        const tarefa = response.data
        
        const tarefa_tratada = []

        for (let index = 0; index < tarefa.length; index++) {
          const nome = tarefa[index].nomeTarefa

          const objeto = {"nome": nome, "id" : index + 1}
          tarefa_tratada[index] = objeto
          // tarefa_tratada[index] = {"nome": tarefa[index].nomeTarefa, "id" : index}
          

          setTarefa(tarefa_tratada[0])
         
        }
   
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function deletar(id) {
    console.log("só o id", id)
    axios.delete(`http://172.16.2.8:3000/task/${id}`)
    .then(res => {
      if (res.status == 200){
        console.log('funfo')
      }
    })
  }

  return(
      <View>
          <View
          className={`border border-gray-300 mt-4 rounded-md p-3 py-5 ${checked ? 'bg-zinc-100' : 'bg-white'} justify-between flex-row align-center items-center`}>
            {/* BOTÃO CHECK TAREFA */}
            <View>
            <TouchableOpacity activeOpacity={0.50} className='ml-1' onPress={handleCheckClick}>
              {checked ? (
                <Icon name="check-square" size={22} color="black" />
              ) : (
                <Icon name="square" size={22} color="black" />
              )}
              </TouchableOpacity>
            </View>

              <View>
                <Text className={`text-md font-poppinsRegular mt-1 ${checked ? 'line-through' : ''}`}>{tarefa.nome}</Text>
              </View>

              <View >
                <TouchableOpacity activeOpacity={0.50} className='w-7 h-7 justify-center items-center'>
                  <Icon name="trash" size={22} color="#d946ef" />
                  <View className='absolute bg-fuchsia-500 h-8 w-8 opacity-20 rounded-full' />
                </TouchableOpacity>
              </View>
          </View>
      </View>

      
      
  );
}