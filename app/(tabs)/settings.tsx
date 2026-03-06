import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const user = {
    name: "John Doe",
    email: "user@gmail.com",
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/"),
      },
    ]);
  };

  const SettingRow = ({
    icon,
    label,
    onPress,
    rightComponent,
  }: any) => (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={20} color="#374151" />
        <Text style={styles.rowText}>{label}</Text>
      </View>

      {rightComponent ? (
        rightComponent
      ) : (
        <Ionicons name="chevron-forward-outline" size={18} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE HEADER */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={32} color="#2563EB" />
          </View>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>Account</Text>

        <SettingRow
          icon="create-outline"
          label="Edit Profile"
          onPress={() => {}}
        />

        <SettingRow
          icon="lock-closed-outline"
          label="Change Password"
          onPress={() => {}}
        />

        {/* PREFERENCES */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        <SettingRow
          icon="notifications-outline"
          label="Enable Notifications"
          rightComponent={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#E5E7EB", true: "#2563EB" }}
              thumbColor="#fff"
            />
          }
        />

        <SettingRow
          icon="moon-outline"
          label="Dark Mode"
          rightComponent={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#E5E7EB", true: "#2563EB" }}
              thumbColor="#fff"
            />
          }
        />

        {/* ABOUT */}
        <Text style={styles.sectionTitle}>About</Text>

        <View style={styles.versionRow}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#374151"
          />
          <Text style={styles.versionText}>Smart Home v1.0.0</Text>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={18} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  avatar: {
    backgroundColor: "#E0ECFF",
    width: 55,
    height: 55,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  email: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 10,
    marginTop: 10,
  },

  row: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
    color: "#111827",
  },

  versionRow: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  versionText: {
    fontSize: 14,
    marginLeft: 12,
    color: "#374151",
  },

  logoutButton: {
    backgroundColor: "#DC2626",
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 8,
  },
});