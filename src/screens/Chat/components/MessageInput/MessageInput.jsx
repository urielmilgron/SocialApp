import { View, TextInput, TouchableHighlight, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './MessageInput.style'
import { Ionicons } from '@expo/vector-icons'; 


const MessageInput = () => {
  const [value, setValue] = useState()

  const onSubmit = () => {
    console.log("enviaste el mensaje" + value)
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