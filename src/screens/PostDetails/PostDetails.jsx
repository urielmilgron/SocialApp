import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./PostDetails.style";
import CommentInput from "./components/CommentInput/CommentInput";

const PostDetails = ({ route }) => {
  const { post, userName, imageProfile } = route.params;

  
  return (
    <View style={styles.container}>
      <View style={styles.userNamePostContainer}>
        <Image
          style={styles.imageProfile}
          source={{
            uri: imageProfile,
          }}
        />
        <Text style={styles.userNamePost}>{userName}</Text>
        <Text style={styles.timePost}>{post.createdAt}</Text>
      </View>
      <View style={styles.postContainer}>
        <View style={styles.contentPostContainer}>
          <Text style={styles.contentPost}>{post.text}</Text>
        </View>
      </View>
          <CommentInput/>
    </View>
  );
};

export default PostDetails;
