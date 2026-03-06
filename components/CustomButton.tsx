import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

export default function CustomButton({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2c7be5",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});