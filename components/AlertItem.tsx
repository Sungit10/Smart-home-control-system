import { View, Text, StyleSheet } from "react-native";

export default function AlertItem({ message }: { message: string }) {
  return (
    <View style={styles.alert}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "#ffdddd",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: { color: "#a00", fontWeight: "bold" },
});