import { View, Text, TouchableHighlight, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./PublicationItem.style";
import { Ionicons } from "@expo/vector-icons";
import {
  useGetProfileNameQuery,
  useAddLikeMutation,
  useDeleteLikeMutation,
  useGetProfileImageQuery,
} from "../../../services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../features/user/userSlice";
import { listeningPosts } from "../../../firebase/firebaseListeners";
import { filterByDate } from "../../../utilities/filterByDate";

const PublicationItem = ({ navigation, publication }) => {
  const { localId, userName } = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess, isError } = useGetProfileNameQuery(
    publication.localId
  );
  const [addLike, resultAddLike] = useAddLikeMutation();
  const [deleteLike, resultDeletLike] = useDeleteLikeMutation();
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(publication.likes || {});
  const [comments, setComments] = useState(publication.comments || {})
  const { data: dataImage, isSuccess: isSuccessImage } =
    useGetProfileImageQuery(publication.localId);

  // Escucha cambios en tiempo real usando el listener de Firebase directamente
  useEffect(() => {
    const unsubscribe = listeningPosts((newPosts) => {
      if (newPosts) {
        const filterArray = filterByDate(newPosts);
        dispatch(setPosts(filterArray));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [resultAddLike, resultDeletLike, dataImage, isSuccessImage]);

  //Si localId está en likes, se lo elimina de la db y si no se agrega
  const onPress = async () => {
    if (localId in likes) {
      // Si ya le diste like, elimínalo
      await deleteLike({ postId: publication.id, localId });
    } else {
      // Si no le diste like, agrégalo
      await addLike({ postId: publication.id, localId });
    }
  };

  useEffect(() => {
    // Actualiza likes cuando hay cambios en la base de datos
    setComments(publication.comments || {})
    setLikes(publication.likes || {});
  }, [publication.likes, publication.comments]);

  //Cuenta los likes
  const likesCount = Object.keys(likes).length;
  const commentsCount = Object.keys(comments).length

  if (isError) {
    console.log(isError);
  }

  return (
    isSuccess &&
    data &&
    data.userName && (
      <View style={styles.container}>
        <View style={styles.userNamePostContainer}>
          {dataImage && dataImage.image && (
            <Image
              style={styles.imageProfile}
              source={{
                uri: dataImage.image,
              }}
            />
          )}
          <Text style={styles.userNamePost}>{!isLoading && data.userName === userName? "Tú" : data.userName}</Text>
          <Text style={styles.timePost}>{publication.createdAt}</Text>
        </View>
        <View style={styles.contentPostContainer}>
          <Text style={styles.contentPost}>{publication.text}</Text>
        </View>
        <View style={styles.likesAndCommentsContainer}>
          <Pressable style={styles.likesTextButton}>
            <Text style={styles.likesText}>
              {likesCount ? `${likesCount} likes` : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.likesTextButton}>
            <Text style={styles.likesText}>
              {commentsCount ? `${commentsCount} comments` : ""}
            </Text>
          </Pressable>
        </View>
        <View style={styles.bottonsContainer}>
          <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
              {localId in likes ? (
                <Ionicons name="thumbs-up-sharp" size={20} color="#A294EB" />
              ) : (
                "Me gusta"
              )}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.buttonDivisor]} onPress={() => {
            navigation.navigate("PostDetails", {post: publication, imageProfile:dataImage.image, userName: data.userName === userName? "Tú" : data.userName})
          }}>
            <Text style={styles.buttonText}>Comentar</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  );
};

export default PublicationItem;
