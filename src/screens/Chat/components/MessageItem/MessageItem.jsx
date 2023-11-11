import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./MessageItem.style";
import { useGetProfileImageQuery, useGetProfileNameQuery } from "../../../../services/userApi";
import { listeningMessages } from "../../../../firebase/firebaseListeners";
import { filterByDate } from "../../../../utilities/filterByDate";
import { setMessages } from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const MessageItem = ({ message }) => {
  const { userName } = useSelector((state) => state.auth) 
  const { data: dataImage, isSuccess: isSuccessImage } = useGetProfileImageQuery(message.localId)
  const { data, isSuccess: isSuccessName, isLoading: isLoadingName} = useGetProfileNameQuery(message.localId)
  const dispatch = useDispatch()


  useEffect(() => {
    const unsubscribe = listeningMessages((newMsg) => {
      if(newMsg){
        const filterArray = filterByDate(newMsg)
        dispatch(setMessages(filterArray))
      }
    })
    return () => {
      unsubscribe()
    }
  }, [isSuccessImage, dataImage, isSuccessName, data])
  

  return (isSuccessImage && data.userName && data && (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: dataImage.image }} />
      </View>
      <View style={styles.timeTextContainer}>
        <Text style={styles.userText}>{!isLoadingName && data.userName === userName? "Tú" : data.userName}</Text>
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.timeText}>{message.createdAt}</Text>
      </View>
    </View>
  ))
};

export default MessageItem;
