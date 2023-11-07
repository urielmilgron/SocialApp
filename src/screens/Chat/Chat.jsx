import { View, TextInput, Image, Text, FlatList } from "react-native";
import React from "react";
import styles from "./Chat.style";
import data from "../../data/messages";
import MessageInput from './components/MessageInput/MessageInput'
import MessageItem from "./components/MessageItem/MessageItem";

const Chat = () => {
  console.log(data);


  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => <MessageItem message={item} />}
      />
      </View>
      <View style={styles.messageInputContainer}><MessageInput/></View>
    </View>
  );
};

export default Chat;
