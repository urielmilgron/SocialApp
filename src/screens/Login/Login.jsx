import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerLogin({
      email,password
    })
    if(result.isSuccess){
      dispatch(setUser(result))
    }
    console.log(result)
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput style={styles.textInput} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.textInput} placeholder='Password' value={password} onChangeText={setPassword}/>
        <Pressable style={styles.button} onPress={onSubmit}>
            <Text>Login</Text>
        </Pressable>
        <Text>Not have an account?</Text>
        <Pressable style={[styles.button, styles.buttonSign]} onPress={() => navigation.navigate("Signup")}>
            <Text>Sign up</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default Login