import { View, Text, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Signup.style";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserName } from "../../features/auth/authSlice";
import { usePostProfileNameMutation } from "../../services/userApi";

const Signup = ({ navigation }) => {
  const userName = useSelector(state => state.auth.userName)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false)

  const [triggerUserName, resultUser] = usePostProfileNameMutation();
  const [triggerSignUp, resultSignUp] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignUp({
      email,
      password,
    });
    dispatch(setUserName(fullName));
  };

  useEffect(() => {
    if (resultSignUp.isSuccess) {
      dispatch(setUser(resultSignUp));
      const localId = resultSignUp.data.localId
        triggerUserName({
          userName,
          localId
        });
    }
  }, [resultSignUp.isSuccess]);

  useEffect(() => {
    console.log(resultUser);
    if (resultUser.isSuccess) {
      console.log("Su cuenta se ha creado con exito!")
    }
  }, [resultUser.isSuccess]);
  
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="New password"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text>Sign up</Text>
        </Pressable>
        <Text>Do you have an account?</Text>
        <Pressable
          style={[styles.button, styles.buttonSign]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
