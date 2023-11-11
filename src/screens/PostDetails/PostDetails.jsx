import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./PostDetails.style";
import CommentInput from "./components/CommentInput/CommentInput";
import { useGetCommentsQuery } from "../../services/userApi";
import { setComments, setPosts } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { filterByDate } from "../../utilities/filterByDate";
import { listeningComments } from "../../firebase/firebaseListeners";
import CommentItem from "./components/CommentItem/CommentItem";
const PostDetails = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { post, userName, imageProfile } = route.params;
  const postId = post.id;
  const {
    data: dataComments,
    isLoading,
    isError,
    isSuccess,
  } = useGetCommentsQuery(postId);
  const data = useSelector((state) => state.user.comments);
  useEffect(() => {
    if (isLoading) {
      true;
    }
    const unsubscribe = listeningComments((newCmnts) => {
      if (newCmnts) {
        const filterArray = filterByDate(newCmnts, "comment"); // Ajusta el filtro según tus necesidades
        dispatch(setComments(filterArray));
        setLoading(false);
      }
    }, postId);

    return () => {
      // Limpia el listener cuando el componente se desmonta ya que
      //onValue manda undefined si se ejecuta la función
      unsubscribe();
    };
  }, [dispatch, dataComments]);

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
      <CommentInput post={post} />
      <View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#00ff00"
            style={{ alignSelf: "center" }}
          />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(comment) => comment.id}
            renderItem={(comment) => <CommentItem comment={comment} />}
          />
        )}
      </View>
    </View>
  );
};

export default PostDetails;
