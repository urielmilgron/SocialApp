import { View, Text, TouchableHighlight, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./PublicationItem.style";
import { Ionicons } from "@expo/vector-icons";
import { useGetProfileNameQuery, useUpdateLikeMutation } from "../../../services/userApi";
import { useSelector } from "react-redux";

const PublicationItem = ({ navigation, publication }) => {
  const { localId } = useSelector((state) => state.auth)
  const [like, setLike] = useState("Me gusta");
  const [likes, setLikes] = useState(publication.likes);
  const {data, isLoading, isSuccess} = useGetProfileNameQuery(publication.localId)
  const [triggerLike, result ] = useUpdateLikeMutation()
  const onPress = () => {
    if (like == "Me gusta") {
      setLike(<Ionicons name="thumbs-up-sharp" size={20} color="#A294EB" />);
      triggerLike(publication.id, localId)
    } else {
      setLike("Me gusta");
      setLikes(likes-1)
    }
  };
  return isSuccess && data && data.userName ? (
    <View style={styles.container}>
      <View style={styles.userNamePostContainer}>
        <Text style={styles.userNamePost}>{!isLoading && data.userName}</Text>
        <Text style={styles.timePost}>{publication.createdAt}</Text>
      </View>
      <View style={styles.contentPostContainer}>
        <Text style={styles.contentPost}>{publication.text}</Text>
      </View>
      <View style={styles.likesAndCommentsContainer}>
        <Pressable style={styles.likesTextButton}><Text style={styles.likesText}>{publication.likes? `${publication.likes.length} likes` : ''}</Text></Pressable>
        {/* <Pressable style={styles.likesTextButton}><Text style={styles.likesText}>{publication.comments.length? `${publication.comments.length} comentarios` : ''}</Text></Pressable> */}
      </View>
      <View style={styles.bottonsContainer}>
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{like}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.buttonDivisor]}>
          <Text style={styles.buttonText}>Comentar</Text>
        </TouchableHighlight>
      </View>
    </View>
 
  ) : <Text>Cargando...</Text>;
};

export default PublicationItem;
