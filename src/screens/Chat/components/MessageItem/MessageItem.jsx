import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./MessageItem.style";

const MessageItem = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: message.image }} />
      </View>
      <View style={styles.timeTextContainer}>
        <Text style={styles.userText}>{message.user}</Text>
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.timeText}>{message.createdAt}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
