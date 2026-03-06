import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type DeviceCardProps = {
  name: string;
  icon: any;
  isOn: boolean;
  onToggle: (value: boolean) => void;
  onPress?: () => void;
};

export default function DeviceCard({
  name,
  icon,
  isOn,
  onToggle,
  onPress,
}: DeviceCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.topRow}>
        <Ionicons name={icon} size={28} color="#3b82f6" />
        <Switch
          value={isOn}
          onValueChange={onToggle}
          trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
          thumbColor="#ffffff"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.deviceName}>{name}</Text>
        <Text style={[styles.status, { color: isOn ? "#22c55e" : "#ef4444" }]}>
          {isOn ? "ON" : "OFF"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  info: {
    marginTop: 20,
  },

  deviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },

  status: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
  },
});