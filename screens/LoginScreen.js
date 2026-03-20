import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import styles from '../styles';
import { AppContext } from '../contexts/AppContext';

import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";

export default function LoginScreen({ navigation }) {

  const { setIsLoggedIn } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setMessage("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    // giả lập login thành công
    setIsLoggedIn(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.top}>

        {/* Title */}
        <Text style={styles.title}>Sign In</Text>

        {/* Email */}
        <Text style={styles.label}>Email ID</Text>
        <CustomTextInput
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
        <CustomTextInput
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Forgot password */}
        <TouchableOpacity>
          <Text style={{
            color: "orange",
            textAlign: "right",
            marginTop: 8
          }}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Error message */}
        {message !== '' && (
          <Text style={styles.errorText}>{message}</Text>
        )}

      </View>

      <View style={styles.bottom}>

        {/* Sign In button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Social login */}
        <Text style={{
          textAlign: "center",
          marginVertical: 15,
          color: "#666"
        }}>
          Or sign in with
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <IconButton
            title="Google"
            icon="logo-google"
            color="#DB4437"
          />

          <IconButton
            title="Facebook"
            icon="logo-facebook"
            color="#4267B2"
          />
        </View>

        {/* Sign up */}
        <Text style={{
          textAlign: "center",
          marginTop: 20
        }}>
          Not yet a member?{" "}
          <Text style={{ color: "orange" }}>
            Sign Up
          </Text>
        </Text>

      </View>

    </KeyboardAvoidingView>
  );
}