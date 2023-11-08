import { View, TextInput, TouchableHighlight, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './MessageInput.style'
import { Ionicons } from '@expo/vector-icons'; 
import {  useSelector } from 'react-redux';
import {  usePostMessageMutation } from '../../../../services/userApi';
import { v4 as uuidv4 } from 'uuid'

const MessageInput = () => {
  const [value, setValue] = useState()
  const { localId } = useSelector((state) => state.auth)
  const [triggerMsg, result] = usePostMessageMutation()
  const msgId = uuidv4()

  const onSubmit = () => {
    if(value){
      triggerMsg({
        id:msgId,
        text:value,
        createdAt: new Date().toLocaleString(),
        localId: localId
      })
    }
    setValue(null)
    Keyboard.dismiss()
  }

  
  return (
    <View style={styles.container}>
    <View style={styles.messageInputContainer}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.messageInput}
        placeholder={`Escribe un mensaje`}
      />
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableHighlight style={styles.button} onPress={() => onSubmit()}>
      <Ionicons name="send-outline" size={24} color="black" />
      </TouchableHighlight>
    </View>
  </View>
  )
}

export default MessageInput