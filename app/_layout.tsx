import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const StackLauout = () => {
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLauout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
