import { View, Text, Image } from "react-native";
import React from "react";
import {
  useGetProfileImageQuery,
  useGetProfileNameQuery,
} from "../../../../services/userApi";
import styles from "./CommentItem.style";
import { useSelector } from "react-redux";
const CommentItem = ({ comment }) => {
  const { text, createdAt, localId } = comment.item;
  const { userName } = useSelector((state) => state.auth);
  const {
    data: dataImage,
    isError: isErrorImage,
    isLoading: isLoadingImage,
    isSuccess: isSuccessImage,
  } = useGetProfileImageQuery(localId);
  const {
    data: dataName,
    isError: isErrorName,
    isLoading: isLoadingName,
    isSuccess: isSuccessName,
  } = useGetProfileNameQuery(localId);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {dataImage && dataImage.image && (
          <Image
            style={styles.imageProfile}
            source={{
              uri: dataImage.image,
            }}
          />
        )}
      </View>
      <View style={styles.nameCommentTimeContainer}>
        <View style={styles.nameContainer}>
          {dataName && dataName.userName && (
            <Text style={styles.userNameText}>
              {dataName.userName == userName ? "Tú" : dataName.userName}
            </Text>
          )}
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.comment}>{text}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.timeText}>{createdAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
