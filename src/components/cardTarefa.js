import { Text, View, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardTarefa({ navigation }) {
  const texto = "Esse é um belo de exemplo de task possivelmente grande";
  const limiteCaracteres = 28; // Número máximo de caracteres
  const textoLimitado =
    texto.slice(0, limiteCaracteres) +
    (texto.length > limiteCaracteres ? "..." : ""); // Limita o texto ao número máximo de caracteres

  // SETAR TAREFA COMO FEITA OU NÃO FEITA
  const [checked, setChecked] = useState(false);
  const [tarefa, setTarefa] = useState("");

  const handleCheckClick = (id) => {
    if (!checked) {
      axios.put(`https://blue-violet-seahorse-suit.cyclic.app/feito/${id}`).then((res) => {
        if (res.status == 200) {
          setChecked(!checked);
          console.log("funfo");
        }
      });
    } else {
      axios.put(`https://blue-violet-seahorse-suit.cyclic.app/naofeito/${id}`).then((res) => {
        if (res.status == 200) {
          setChecked(!checked);
          console.log("funfo");
        }
      });
    }
  };

  useEffect(() => {
    axios
      .get(`https://blue-violet-seahorse-suit.cyclic.app/task`)
      .then((response) => {
        const tarefa = response.data;

        const tarefa_tratada = [];

        for (let index = 0; index < tarefa.length; index++) {
          const nome = tarefa[index].nomeTarefa;

          const objeto = { nome: nome, id: index + 1 };
          tarefa_tratada[index] = objeto;

          setTarefa(tarefa_tratada[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deletar(id) {
    console.log("só o id", id);
    axios.delete(`https://blue-violet-seahorse-suit.cyclic.app//task/${id}`).then((res) => {
      if (res.status == 200) {
        console.log("funfo");
      }
    });
  }

  return (
    <View>
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
            onPress={() => handleCheckClick(tarefa.id)}
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
            {tarefa.nome}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-7 h-7 justify-center items-center"
            onPress={() => deletar(tarefa.id)}
          >
            <Icon name="trash" size={22} color="#d946ef" />
            <View className="absolute bg-fuchsia-500 h-8 w-8 opacity-20 rounded-full" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
