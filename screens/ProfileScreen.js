import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AppContext } from "../contexts/AppContext";

export default function ProfileScreen() {

  const { setIsLoggedIn} = useContext(AppContext);

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>

      {/* Header */}
      <Image
        source={require("../assets/tinh-avatar.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />

      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Tịnh Nguyễn
      </Text>

      {/* Info */}
      <View style={{ marginTop: 30 }}>

        <TouchableOpacity
          onPress={() => setIsLoggedIn(false)}
          style={{
            backgroundColor: "red",
            padding: 12,
            borderRadius: 6
          }}
        >
          <Text style={{ color: "#fff" }}>Sign Out</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}