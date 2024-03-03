import { Text, View, TouchableOpacity, TextInput, Modal } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import axios from "axios";


export default function CardLista(listaId) {
  const texto = "Nome da Lista";
  const limiteCaracteres = 19; // Número máximo de caracteres
  const textoLimitado =
    texto.slice(0, limiteCaracteres) +
    (texto.length > limiteCaracteres ? "" : "");
  const [modalVisible, setModalVisible] = useState(false);

  const [list, setLists] = useState("");

  useEffect(() => {
    axios
      .get(`http://172.16.2.203:3000/list`)
      .then((response) => {
        const lista = response.data;

        const lista_tratada = [];

        for (let index = 0; index < lista.length; index++) {
          const nome = lista[index].nomeLista;

          const objeto = { nome: nome, id: index + 34 };
          lista_tratada[index] = objeto;

          setLists(lista_tratada[0]);
        }
      })
      .catch((error) => {
        console.error("Erro", error);
      });
  }, []);

  function deletar(id) {
    console.log("só o id", id);
    axios.delete(`http://172.16.2.203:3000/list/${id}`).then((res) => {
      if (res.status == 200) {
        console.log("funfo");
      }
    });
  }

  return (
    <View className="border border-gray-300 rounded-lg p-4 mt-4 bg-white justify-between flex-row">
      <View>
        <TextInput maxLength={19} className="text-lg font-poppinsMedium">
          {list.nome}
        </TextInput>
      </View>

      <View className="justify-center">
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setModalVisible(true)}
          className="w-8 h-8 justify-center items-center"
        >
          <Icon name="trash" size={26} color="#d946ef" />
          <View className="absolute bg-fuchsia-500 h-9 w-9 opacity-20 rounded-full" />
        </TouchableOpacity>
      </View>

      {/* MODAL DE APAGAR */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex bg-white w-72 h-52 border border-gray-300 rounded-2xl p-10 drop-shadow-md mt-72 items-center self-center">
          <Text className="text-center  text-black text-lg font-medium mb-3">
            Tem certeza que deseja apagar esta lista?
          </Text>
          <View className="flex flex-row ">
            <TouchableOpacity
              className="rounded-2xl bg-[#d946ef] p-2 m-5"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="text-sm align-center self-center text-white">
                CANCELAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-2xl bg-[#d946ef] p-2 m-5"
              onPress={() => {
                setModalVisible(!modalVisible);
                deletar(list.id);
              }}
            >
              <Text className="text-sm align-center self-center text-white">
                CONFIRMAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
