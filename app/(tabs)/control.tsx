import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Control() {
  const [lightOn, setLightOn] = useState(true);
  const [fanOn, setFanOn] = useState(false);
  const [doorLocked, setDoorLocked] = useState(true);

  const DeviceCard = ({
    icon,
    iconColor,
    title,
    statusText,
    statusColor,
    value,
    onToggle,
  }: any) => (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.left}>
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={20} color={iconColor} />
          </View>
          <Text style={styles.deviceName}>{title}</Text>
        </View>

        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: "#E5E7EB", true: "#2563EB" }}
          thumbColor="#fff"
        />
      </View>

      <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
        <Text style={styles.statusText}>{statusText}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.header}>Device Control</Text>
        <Text style={styles.subtitle}>
          Manage your smart home devices in real time
        </Text>

        <DeviceCard
          icon="bulb-outline"
          iconColor={lightOn ? "#FFD43B" : "#9CA3AF"}
          title="Living Room Light"
          statusText={lightOn ? "ON" : "OFF"}
          statusColor={lightOn ? "#DCFCE7" : "#FEE2E2"}
          value={lightOn}
          onToggle={setLightOn}
        />

        <DeviceCard
          icon="snow-outline"
          iconColor={fanOn ? "#4DABF7" : "#9CA3AF"}
          title="Ceiling Fan"
          statusText={fanOn ? "ON" : "OFF"}
          statusColor={fanOn ? "#DCFCE7" : "#FEE2E2"}
          value={fanOn}
          onToggle={setFanOn}
        />

        <DeviceCard
          icon={doorLocked ? "lock-closed-outline" : "lock-open-outline"}
          iconColor={doorLocked ? "#16A34A" : "#DC2626"}
          title="Main Door"
          statusText={doorLocked ? "Locked" : "Unlocked"}
          statusColor={doorLocked ? "#DCFCE7" : "#FEE2E2"}
          value={!doorLocked}
          onToggle={() => setDoorLocked(!doorLocked)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 25,
    marginTop: 4,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    backgroundColor: "#F3F4F6",
    padding: 8,
    borderRadius: 12,
    marginRight: 10,
  },

  deviceName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  statusBadge: {
    alignSelf: "flex-start",
    marginTop: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
  },
});