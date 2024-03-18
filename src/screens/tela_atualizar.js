import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Icone from "react-native-vector-icons/Feather";
import React, { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";
import api from '../service/api'

export default function TelaAtualizar({ navigation, route}) {
  const [nomeTask, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [id, setID] = useState('');

  const {listaId, taskId} = route.params;

  useEffect(() => {
    fetchTasks()
  }, []);

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
          setID(selectedTask.id);
        }

      })
      .catch((error) => {
        console.error("Erro", error);
      });
  };


  function atualizar(id) {
    console.log("só o id", id);
    api
      .put(`/task/${id}`, {
        nomeTask: nomeTask,
        descricao: descricao,
        tipo: tipo,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log("funfo");
        }
      });
  }


  const placeholder = {
    label: "Selecione a categoria...",
    value: null,
  };
  const options = [
    { label: "Pessoal", value: "pessoal" },
    { label: "Comercial", value: "comercial" },
    { label: "Outros", value: "outro" },
  ];

  return (
    <View className="h-full px-5 mt-16">
      <View className="flex-row justify-between items-center">
        <Text className="text-3xl font-poppinsBold">{nomeTask}</Text>

        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="flex-row align-center items-center"
            onPress={() => navigation.goBack()}
          >
            <Icone name="chevron-left" size={26} color="#D047FF" />
            <Text className="text-fuchsia-500 text-lg font-poppinsMedium">
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-xl mt-1 font-poppinsMedium text-gray-400">
        Edite sua tarefa
      </Text>

      <View className="mt-5">
        <Text className="text-xl mt-5 font-poppinsMedium ">Titulo</Text>
        <TextInput
          className="border border-gray-300 mt-4 rounded-md p-3 py-5 text-xl bg-white	"
          placeholder="Escreva o nome da sua tarefa..."
          value={nomeTask}
          onChangeText={(text) => setNome(text)}
        />
      </View>

      <View>
        <Text className="text-xl mt-5 font-poppinsMedium ">Descrição</Text>
        <TextInput
          className="border border-gray-300 bg-white mt-4 rounded-md p-3 py-5 text-xl"
          placeholder="Escreva aqui a descrição da sua tarefa..."
          maxLength={112}
          multiline={true}
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
      </View>

      <View>
        <Text className="text-xl mt-5 font-poppinsMedium ">Categoria</Text>
        <View className="border border-gray-300 bg-white mt-4 rounded-md text-xl">
          <RNPickerSelect
            placeholder={placeholder}
            items={options}
            onValueChange={(text) => setTipo(text)}
            value={tipo}
          />
        </View>
      </View>

      <View className="items-center justify-center mt-5">
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => atualizar(id)}
          className="bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center"
        >
          <Text className="font-poppinsBold text-white text-lg items-center">
            Atualizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
