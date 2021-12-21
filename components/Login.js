import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  const register = () => {};

  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://ps.w.org/wp-live-chat-software-for-wordpress/assets/icon-256x256.png?rev=2303190",
        }}
        style={{ width: 200, height: 200, margin: 10 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></Input>
      </View>
      <Button containerStyle={styles.button} onPress={login} title="Login" />
      <Button
        onPressIn={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        onPress={register}
        title="Register"
        type="outline"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
