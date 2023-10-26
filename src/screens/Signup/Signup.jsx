import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { usePostProfileNameMutation } from '../../services/userApi'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [userName, setUserName] = useState('')

  const [triggerUserName, resultUser] = usePostProfileNameMutation()
  const [triggerSignUp, resultSignUp] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerSignUp({
      email,
      password,
    }) 
    triggerUserName({
      userName
    })
    if(resultSignUp.isSuccess && resultUser.isSuccess){
      dispatch(setUser(resultSignUp))
      dispatch(setUserName(resultUser))
    }
   
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput style={styles.textInput} placeholder='Name' value={userName} onChangeText={setUserName}/>
        <TextInput style={styles.textInput} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.textInput} placeholder='New password' value={password} onChangeText={setPassword}/>
        <TextInput style={styles.textInput} placeholder='Confirm password' value={confirmPass} onChangeText={setConfirmPass}/>
        <Pressable style={styles.button} onPress={onSubmit}>
            <Text>Sign up</Text>
        </Pressable>
        <Text>Do you have an account?</Text>
        <Pressable style={[styles.button, styles.buttonSign]} onPress={() => navigation.navigate("Login")}>
            <Text>Login</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default Signup