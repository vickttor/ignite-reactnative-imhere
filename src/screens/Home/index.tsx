import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { Participant } from "../../components/Participant";
import { Alert } from "react-native";

export function HomeScreen() {
  const [participantName, setParticipantName] = useState("");
  const [participantList, setParticipantList] = useState<string[]>([]);

  function cleanTextInput() {
    setParticipantName("");
  }

  function handleAddParticipant() {

    if(participantName.length < 3) {
      return Alert.alert(
        "Nome do Participante", 
        "Preencha o nome do participant com no mínimo 3 caracteres",
      );
    }
    
    if(participantList.some((name)=>
      name.toLowerCase() === participantName.toLowerCase()
    )){
      return Alert.alert(
        "Participante Existente", 
        "Esse nome já está incluído na lista de participantes."
      );
    }
  
    setParticipantList((list)=>[participantName,...list]);
    cleanTextInput();
  
  }

  function handleDeleteParticipant(nameToRemove: string){
    Alert.alert(
      "Remover participante", 
      `Tem certeza que deseja remover participante ${nameToRemove}?`, 
      [
        {
          text: "Sim",
          onPress: () => setParticipantList((list)=>
            list.filter((participant)=>participant !== nameToRemove)
          )
        },
        {
          text: "Não",
          style: 'cancel'
        },
      ]
    );
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>
        Nome do Evento
      </Text>
      <Text style={styles.subTitle}>
        Sexta, 4 de Novembro de 2023.
      </Text>

      <View style={styles.formContainer}>
        <TextInput 
          value={participantName}
          onChangeText={setParticipantName}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          cursorColor={"#31Cf67"}
          keyboardAppearance="default"
          style={styles.input} 
        />
        <TouchableOpacity  onPress={handleAddParticipant} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantList}
        keyExtractor={item=>String(item)}
        renderItem={({item})=> (
          <Participant 
            key={item} 
            name={item} 
            onPress={()=>handleDeleteParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
        ListEmptyComponent={()=> (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}


/**
 * 
 * Differences between ScrollView and FlatList
 * 
 * ScrollView => It renders all the components even when they aren't visible 
 * in the screen.It's recommended when you have small lists with limited length 
 * for example (ex: Sidebar menu)
 * 
 * FlatList => FlatList is a smart component to work with list wich will 
 * apply scroll and worring to performance. The performance is applied because 
 * it will only render the visible components. This means the ones which aren't 
 * in the view height or view width is not rendered.
 * 
 * It's recommended when you don't know the length of the list.
 *  
 */