import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import styles from "./PublicationItem.style";
import { Ionicons } from '@expo/vector-icons'; 

const PublicationItem = ({ publication }) => {
  const [like, setLike] = useState('Me gusta')
  const onPress = () => {
    if(like == "Me gusta"){
      setLike(<Ionicons name="thumbs-up-sharp" size={20} color="#A294EB" />)
    } else{
      setLike("Me gusta")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.userNamePostContainer}>
        <Text style={styles.userNamePost}>{publication.user}</Text>
        <Text style={styles.timePost}>{publication.createdTime}</Text>
      </View>
      <View style={styles.contentPostContainer}>
        <Text style={styles.contentPost}>{publication.content}</Text>
      </View>
      <View style={styles.bottonsContainer}>
        <TouchableHighlight style={styles.button}  onPress={onPress}>
          <Text style={styles.buttonText}>{like}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.buttonDivisor]}>
          <Text style={styles.buttonText}>Comentar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PublicationItem;
