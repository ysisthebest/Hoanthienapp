import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "../styles";

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error
}) {
  return (
    <View style={{ marginBottom: 16 }}>
      <TextInput
        style={[
          styles.input,
          error && styles.inputError
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}