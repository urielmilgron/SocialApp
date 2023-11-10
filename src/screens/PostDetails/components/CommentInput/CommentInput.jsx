import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { usePostCommentMutation } from '../../../../services/userApi'
import styles from './CommentInput.style'

const CommentInput = () => {
  const [value, setValue] = useState(null)
  const { localId } = useSelector((state) => state.auth)
  const postId = uuidv4()
  const dispatch = useDispatch()
  const [triggerPost] = usePostCommentMutation()

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.textInput}
          placeholder={`Comenta el post aquí!`}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.button} >
          <Text>Publicar</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default CommentInput