import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./CreatePostInput.style";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileNameQuery, usePostPublicationMutation } from "../../services/userApi";
import { addPost } from "../../features/user/userSlice";
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid'

const CreatePostInput = () => {
  const [value, setValue] = useState(null);
  const { localId, userName } = useSelector((state) => state.auth);
  const { data, isError, isLoading, isSuccess } = useGetProfileNameQuery(localId);
  const [ triggerPost, resultPost ] = usePostPublicationMutation()
  const dispatch = useDispatch()
  const postId = uuidv4()
  //Si presionamos cancel se borra el texto y se cierra el teclado
  const onPressCancel = () => {
    setValue(null);
    Keyboard.dismiss();
  };
  const onSubmit = () =>{
    triggerPost({id:postId,text: value, comments:[], likes:0, createdAt: new Date().toLocaleString(), localId:localId})
  }

  useEffect(() => {
    if(resultPost.isSuccess){
      console.log(resultPost)
    }
  },[resultPost])
  return isLoading ? <Text>Está cargando</Text>:(
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.textInput}
          placeholder={`Hola ${data.userName}, que publicarás hoy?`}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.button} onPress={() => onSubmit()}>
          <Text>Publicar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.buttonDivisor]}
          onPress={() => onPressCancel()}
        >
          <Text>Cancelar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default CreatePostInput;
