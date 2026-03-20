import { View, Text } from "react-native";

export default function SectionHeader({ title }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );
}