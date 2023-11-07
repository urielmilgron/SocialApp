import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Signup.style";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage, setUser, setUserName } from "../../features/auth/authSlice";
import { usePostProfileImageMutation, usePostProfileNameMutation } from "../../services/userApi";

const Signup = ({ navigation }) => {
  const userName = useSelector(state => state.auth.userName)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false)

  const [triggerUserName, resultUser] = usePostProfileNameMutation();
  const [triggerSignUp, resultSignUp] = useSignUpMutation();
  const [triggerImage, resultImage] = usePostProfileImageMutation()
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true)
    triggerSignUp({
      email,
      password,
    });
    dispatch(setUserName(fullName));
  };

  useEffect(() => {
    if (resultSignUp.isSuccess) {
      
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
      triggerImage({
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        localId: resultSignUp.data.localId
      })
      
      
    }
  }, [resultUser.isSuccess]);

  useEffect(() => {
    console.log(resultImage)
    if(resultImage.isSuccess){
      dispatch(setProfileImage("https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"))
      console.log("Su cuenta se ha creado con exito!")
      dispatch(setUser(resultSignUp));
      setLoading(false)
    }
  },[resultImage.isSuccess])
  
  return loading? <ActivityIndicator size="small" color="#0000ff" /> : (
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
