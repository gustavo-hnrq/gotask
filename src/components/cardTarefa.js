import { Text, View, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import api from '../service/api';

export default function CardTarefa({ taskId, listaId, navigation }) {
  const texto = "Esse é um belo de exemplo de task possivelmente grande";
  const limiteCaracteres = 28; // Número máximo de caracteres
  const textoLimitado =
    texto.slice(0, limiteCaracteres) +
    (texto.length > limiteCaracteres ? "..." : ""); // Limita o texto ao número máximo de caracteres

  // SETAR TAREFA COMO FEITA OU NÃO FEITA
  const [checked, setChecked] = useState(false);
  const [tarefa, setTarefa] = useState("");
  const [nome, setNome] = useState("");
  const [id, setID] = useState('');


  const handleCheckClick = (taskId) => {
    if (!checked) {
      api.put(`/feito/${taskId}`).then((res) => {
        if (res.status == 200) {
          setChecked(!checked);
          console.log("funfo");
        }
      });
    } else {
      api.put(`/naofeito/${taskId}`).then((res) => {
        if (res.status == 200) {
          setChecked(!checked);
          console.log("funfo");
        }
      });
    }
  };

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

  function deletar(taskId) {
    console.log("só o id", taskId);
    api.delete(`/task/${taskId}`).then((res) => {
      if (res.status == 200) {
        console.log("funfo");
      }
    });
  }


  return (
    <View key={taskId}>
      <View
        className={`border border-gray-300 mt-4 rounded-md p-3 py-5 ${
          checked ? "bg-zinc-100" : "bg-white"
        } justify-between flex-row align-center items-center`}
      >
        {/* BOTÃO CHECK TAREFA */}
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="ml-1"
            onPress={() => handleCheckClick(id)}
          >
            {checked ? (
              <Icon name="check-square" size={22} color="black" />
            ) : (
              <Icon name="square" size={22} color="black" />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <Text
            className={`text-md font-poppinsRegular mt-1 ${
              checked ? "line-through" : ""
            }`}
          >
            {nome}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-7 h-7 justify-center items-center"
            onPress={() => deletar(id)}
          >
            <Icon name="trash" size={22} color="#d946ef" />
            <View className="absolute bg-fuchsia-500 h-8 w-8 opacity-20 rounded-full" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
