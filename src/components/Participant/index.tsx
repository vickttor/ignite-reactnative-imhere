import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onPress: () => void;
}
export function Participant({name, onPress}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}