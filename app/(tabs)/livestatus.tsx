import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LiveStatus() {
  const [refreshing, setRefreshing] = useState(false);

  const [temperature, setTemperature] = useState(26);
  const [humidity, setHumidity] = useState(60);
  const [lightStatus, setLightStatus] = useState("ON");
  const [doorStatus, setDoorStatus] = useState("Locked");

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setTemperature(24 + Math.floor(Math.random() * 5));
      setHumidity(50 + Math.floor(Math.random() * 20));
      setLightStatus(Math.random() > 0.5 ? "ON" : "OFF");
      setDoorStatus(Math.random() > 0.5 ? "Locked" : "Unlocked");
      setRefreshing(false);
    }, 1200);
  }, []);

  const isLightOn = lightStatus === "ON";
  const isDoorLocked = doorStatus === "Locked";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Smart Home</Text>
            <Text style={styles.subtitle}>Live System Monitoring</Text>
          </View>

          <View style={styles.onlineContainer}>
            <View style={styles.greenDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        {/* CLIMATE SECTION */}
        <Text style={styles.sectionTitle}>Climate</Text>

        <View style={styles.row}>
          <View style={styles.cardHalf}>
            <Ionicons name="thermometer-outline" size={22} color="#FF6B6B" />
            <Text style={styles.cardLabel}>Temperature</Text>
            <Text style={styles.value}>{temperature}°C</Text>
          </View>

          <View style={styles.cardHalf}>
            <Ionicons name="water-outline" size={22} color="#4DABF7" />
            <Text style={styles.cardLabel}>Humidity</Text>
            <Text style={styles.value}>{humidity}%</Text>
          </View>
        </View>

        {/* SECURITY SECTION */}
        <Text style={styles.sectionTitle}>Home Status</Text>

        <View style={styles.cardFull}>
          <View style={styles.iconRow}>
            <Ionicons
              name="bulb-outline"
              size={22}
              color={isLightOn ? "#FFD43B" : "#ADB5BD"}
            />
            <Text style={styles.cardLabel}>Living Room Light</Text>
          </View>
          <Text
            style={[
              styles.statusValue,
              { color: isLightOn ? "#2F9E44" : "#E03131" },
            ]}
          >
            {lightStatus}
          </Text>
        </View>

        <View style={styles.cardFull}>
          <View style={styles.iconRow}>
            <Ionicons
              name={isDoorLocked ? "lock-closed-outline" : "lock-open-outline"}
              size={22}
              color={isDoorLocked ? "#2F9E44" : "#E03131"}
            />
            <Text style={styles.cardLabel}>Main Door</Text>
          </View>
          <Text
            style={[
              styles.statusValue,
              { color: isDoorLocked ? "#2F9E44" : "#E03131" },
            ]}
          >
            {doorStatus}
          </Text>
        </View>

        <Text style={styles.refreshText}>
          Pull down to refresh live readings
        </Text>
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
    marginTop: 10,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  onlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6FCF5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#12B886",
    marginRight: 6,
  },

  onlineText: {
    color: "#087F5B",
    fontWeight: "600",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
    color: "#374151",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  cardHalf: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    padding: 18,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardFull: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  cardLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 6,
    color: "#111827",
  },

  statusValue: {
    fontSize: 20,
    fontWeight: "700",
  },

  refreshText: {
    textAlign: "center",
    marginTop: 10,
    color: "#9CA3AF",
    fontSize: 12,
  },
});