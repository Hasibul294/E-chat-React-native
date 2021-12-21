import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "./Firebase/Firebase";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://bellawomenscenter.com/wp-content/plugins/schema-and-structured-data-for-wp//admin_section/images/default_user.jpg",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <StatusBar behavior="padding" style={styles.container} />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Your Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        ></Input>
        <Input
          placeholder="Your Email"
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
        <Input
          placeholder="Profile Picture Url (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        ></Input>
        <Button
          containerStyle={styles.button}
          raised
          onPress={register}
          title="register"
        ></Button>
      </View>
    </View>
  );
};

export default Register;

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
  button: {},
});
