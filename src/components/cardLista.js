import { Text, View, TouchableOpacity, TextInput, Modal } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import api from '../service/api';

export default function CardLista({ listaId, onListDelete }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setLists] = useState([]);
  const [nomeLista, setNomeLista] = useState("");


  useEffect(() => {
    api
      .get(`/list`)
      .then((response) => {
        const lista = response.data;
        const lista_tratada = lista.map((item, index) => ({
          nome: item.nomeLista,
          id: index + 1
        }));
        setLists(lista_tratada);
        
        // Encontre o nome da lista com base no ID
        const selectedList = lista_tratada.find(item => item.id === listaId);
        if (selectedList) {
          setNomeLista(selectedList.nome);
        }
      })
      .catch((error) => {
        console.error("Erro", error);
      });
  }, []);

  
  function deletar(id) {
    api.delete(`/list/${id}`).then((res) => {
      if (res.status == 200) {
        // Atualize as listas após a exclusão
        onListDelete();
        console.log("funfo");
      }
    });
  }

  return (
    <>
      <View key={listaId} className="border border-gray-300 rounded-lg p-4 mt-4 bg-white justify-between flex-row">
        <View>
          <TextInput maxLength={19} className="text-lg font-poppinsMedium" value={nomeLista} />
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
            setModalVisible(false);
          }}
        >
          <View className="flex bg-white w-72 h-52 border border-gray-300 rounded-2xl p-10 drop-shadow-md mt-72 items-center self-center">
            <Text className="text-center  text-black text-lg font-medium mb-3">
              Tem certeza que deseja apagar esta lista?
            </Text>
            <View className="flex flex-row ">
              <TouchableOpacity
                className="rounded-2xl bg-[#d946ef] p-2 m-5"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-sm align-center self-center text-white">
                  CANCELAR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="rounded-2xl bg-[#d946ef] p-2 m-5"
                onPress={() => {
                  setModalVisible(false);
                  deletar(listaId);
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
    </>
  );
}
