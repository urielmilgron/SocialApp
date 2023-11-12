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
import {
  useGetProfileNameQuery,
  usePostPublicationMutation,
} from "../../services/userApi";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { setUserName } from "../../features/auth/authSlice";

const CreatePostInput = () => {
  const [value, setValue] = useState(null);
  const { localId, userName } = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess } = useGetProfileNameQuery(localId);
  const [triggerPost] = usePostPublicationMutation();
  const postId = uuidv4();
  const dispatch = useDispatch();
  //Si presionamos cancel se borra el texto y se cierra el teclado
  const onPressCancel = () => {
    setValue(null);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserName(data.userName));
    }
  }, [data, isSuccess, isLoading]);

  //En el onSubmit enviamos los datos del post
  const onSubmit = () => {
    if (value) {
      triggerPost({
        id: postId,
        text: value,
        createdAt: new Date().toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour12: false,
        }),
        localId: localId,
      });
      onPressCancel();
    }
  };
  return  (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.textInput}
          placeholder={`Hola ${!isLoading? userName: "cargando..."}, que publicarás hoy?`}
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
