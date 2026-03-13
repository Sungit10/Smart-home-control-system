import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  value: string;
}

export default function StatusCard({ title, value }: Props) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  value: { fontSize: 20, fontWeight: "bold" },
});