import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostCommentMutation } from "../../../../services/userApi";
import styles from "./CommentInput.style";
import {v4 as uuidv4} from 'uuid'


const CommentInput = ({post}) => {
  const [value, setValue] = useState(null);
  const { localId } = useSelector((state) => state.auth);
  const [triggerPost, result] = usePostCommentMutation();
  const postId = post.id
  const commentId = uuidv4()

  const onSubmit = () => {
    if (value) {
      triggerPost({
        id: commentId,
          text: value,
          createdAt: new Date().toLocaleString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
            hour12: false,
          }),
          localId: localId,
          postId: postId
      });
    }
    setValue(null);
    Keyboard.dismiss();
  };




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
        <TouchableHighlight style={styles.button} onPress={() => onSubmit()}>
          <Text style={styles.textButton}>Publicar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default CommentInput;
