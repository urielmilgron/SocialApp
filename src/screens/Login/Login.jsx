import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Login.style";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { insertSession } from "../../db";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    });
  };

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(setUser(result.data))
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      }).then(result => console.log(result)).catch(error => console.log(error))
    }
  }, [result]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text>Login</Text>
        </Pressable>
        <View style={styles.containerSignup}>

        <Text>Not have an account?</Text>
        <Pressable
          style={[styles.button, styles.buttonSign]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Sign up</Text>
        </Pressable>
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};

export default Login;
