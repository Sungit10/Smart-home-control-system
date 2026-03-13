import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const alertsData = [
  {
    id: "1",
    message: "High Temperature Detected!",
    type: "critical",
    time: "2 mins ago",
  },
  {
    id: "2",
    message: "Water Leak Warning!",
    type: "warning",
    time: "10 mins ago",
  },
  {
    id: "3",
    message: "Front Door Unlocked",
    type: "info",
    time: "30 mins ago",
  },
];

export default function Alerts() {
  const unreadCount = useMemo(() => alertsData.length, []);

  const getAlertConfig = (type: string) => {
    switch (type) {
      case "critical":
        return {
          icon: "alert-circle-outline",
          color: "#E03131",
          bg: "#FFF5F5",
          label: "Critical",
        };
      case "warning":
        return {
          icon: "warning-outline",
          color: "#F08C00",
          bg: "#FFF9DB",
          label: "Warning",
        };
      default:
        return {
          icon: "information-circle-outline",
          color: "#1971C2",
          bg: "#E7F5FF",
          label: "Info",
        };
    }
  };

  const renderItem = ({ item }: any) => {
    const config = getAlertConfig(item.type);

    return (
      <View style={[styles.card, { backgroundColor: config.bg }]}>
        <View style={styles.row}>
          <View style={[styles.iconContainer, { backgroundColor: "#fff" }]}>
            <Ionicons
              name={config.icon as any}
              size={20}
              color={config.color}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.topRow}>
              <Text style={styles.message}>{item.message}</Text>
              <View
                style={[
                  styles.badge,
                  { backgroundColor: config.color },
                ]}
              >
                <Text style={styles.badgeText}>{config.label}</Text>
              </View>
            </View>

            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>

        {unreadCount > 0 && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{unreadCount}</Text>
          </View>
        )}
      </View>

      {alertsData.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons
            name="shield-checkmark-outline"
            size={70}
            color="#12B886"
          />
          <Text style={styles.emptyTitle}>All Clear</Text>
          <Text style={styles.emptyText}>
            Your smart home is operating normally.
          </Text>
        </View>
      ) : (
        <FlatList
          data={alertsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F4F6FA",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  counter: {
    backgroundColor: "#E03131",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  counterText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },

  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconContainer: {
    padding: 8,
    borderRadius: 12,
  },

  textContainer: {
    marginLeft: 12,
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  message: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    marginRight: 10,
    color: "#111827",
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },

  time: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 6,
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
    color: "#111827",
  },

  emptyText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    textAlign: "center",
  },
});