import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./CreatePostInput.style";

const CreatePostInput = () => {
  const [value, setValue] = useState(null);

  const onPress = () => {
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
          placeholder="Publique aquí lo que desee"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.button}>
          <Text>Publicar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.buttonDivisor]} onPress={() => onPress()}>
          <Text>Cancelar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default CreatePostInput;
