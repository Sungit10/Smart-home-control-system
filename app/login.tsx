import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      Alert.alert("Missing Information", "Please enter both email and password.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      if (trimmedEmail === "user@gmail.com" && trimmedPassword === "123456") {
        router.replace("/(tabs)/livestatus");
      } else {
        Alert.alert("Login Failed", "Incorrect email or password.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Smart Home</Text>
            <Text style={styles.subtitle}>
              Securely access your smart devices
            </Text>

            {/* Email */}
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={18} color="#6B7280" />
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
              />
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={18} color="#6B7280" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={secure}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setSecure(!secure)}>
                <Ionicons
                  name={secure ? "eye-off-outline" : "eye-outline"}
                  size={18}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.button,
                loading && { opacity: 0.7 },
              ]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Sign In</Text>
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 28,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 28,
    color: "#6B7280",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#111827",
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 13,
    color: "#2563EB",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});