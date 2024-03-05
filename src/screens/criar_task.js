import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
// import { Button, Icon } from 'react-native-magnus';
import Icone from "react-native-vector-icons/Feather";
import api from '../service/api'
import RNPickerSelect from "react-native-picker-select";



export default function CriarTarefa({ navigation, route}) {
  const [Titulo, setTitulo] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [Categoria, setCategoria] = useState("");

  const { id } = route.params;
 

  const enviar = (e) => {
    const teste =  new Number(id)
 
    api.post("/taskP", {
      // Mudar a url para a da API
      fk_idLista: teste,
      nomeTask: Titulo,
      descricao: Descricao,
      tipo: Categoria,
    });
  };

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
    <View className="h-full px-5 mt-20 pb-14">
      <View className="flex-row justify-between items-center">
        <Text className="text-3xl font-poppinsBold">Nova tarefa</Text>

        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
            className="flex-row align-center items-center"
          >
            <Icone name="chevron-left" size={26} color="#D047FF" />
            <Text className="text-fuchsia-500 text-lg">Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <Text className="text-xl mt-5 font-poppinsMedium">Titulo</Text>
        <TextInput
          value={Titulo}
          onChangeText={(text) => setTitulo(text)}
          className="border border-gray-300 mt-4 rounded-md p-3 py-5 text-xl bg-white"
          placeholder="Escreva o nome da sua tarefa..."
          maxLength={28}
        />
      </View>

      <View>
        <Text className="text-xl mt-5 font-poppinsMedium">Descrição</Text>
        <TextInput
          name="Descricao"
          value={Descricao}
          onChangeText={(text) => setDescricao(text)}
          className="border border-gray-300 bg-white mt-4 rounded-md p-3 py-5 text-xl"
          placeholder="Escreva aqui a descrição da sua tarefa..."
          maxLength={112}
          multiline={true}
        />
      </View>

      <View>
        <Text className="text-xl mt-5 font-poppinsMedium">Categoria</Text>
        <View className="border border-gray-300 bg-white mt-4 rounded-md text-xl">
          <RNPickerSelect
            placeholder={placeholder}
            items={options}
            onValueChange={(text) => setCategoria(text)}
            value={Categoria}
          />
        </View>
      </View>

      <View className="items-center justify-center">
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => enviar()}
          className="bg-fuchsia-500 w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center"
        >
          <Text className="font-poppinsBold text-white text-lg items-center">
            Adicionar Tarefa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
