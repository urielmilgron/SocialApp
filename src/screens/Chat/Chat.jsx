import { View, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Chat.style";
import data from "../../data/messages";
import MessageInput from './components/MessageInput/MessageInput'
import MessageItem from "./components/MessageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { useGetMessagesQuery } from "../../services/userApi";
import { filterByDate } from "../../utilities/filterByDate";
import { setMessages } from "../../features/user/userSlice";
import { listeningMessages } from "../../firebase/firebaseListeners";
const Chat = () => {
  const dispatch = useDispatch()
  const {data: firebaseMsg, isLoading } = useGetMessagesQuery()
  const messages = useSelector((state) => state.user.messages)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(isLoading){
      setLoading(true)
    }
    const unsubscribe = listeningMessages((newMsg) => {
      if(newMsg){
        const filterArray = filterByDate(newMsg, "message")
        dispatch(setMessages(filterArray))
        setLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch, firebaseMsg])


  return  (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
      {loading ? <></>:(<FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => <MessageItem message={item} />}
        inverted
      />)}
      </View>
      <View style={styles.messageInputContainer}><MessageInput/></View>
    </View>
  );
};

export default Chat;
