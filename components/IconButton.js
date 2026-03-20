import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ title, icon, color }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 6,
        backgroundColor: "#eee",
        marginBottom: 10
      }}
    >
      <Ionicons name={icon} size={20} color={color} />
      <Text style={{ marginLeft: 10 }}>{title}</Text>
    </TouchableOpacity>
  );
}