import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./Home.style";
import PublicationItem from "./components/PublicationItem";
import { CreatePostInput } from "../../components/";
import { useGetPublicationsQuery } from "../../services/userApi";
// import { addPost } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../features/user/userSlice";
import { listeningPosts } from "../../firebase/firebaseListeners";

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { data: firebasePosts, isError, isLoading } = useGetPublicationsQuery();
  const posts = useSelector((state) => state.user.posts)
  const headerFlatList = () => {
    return <CreatePostInput />;
  };

  //Escucho la db al despachar los posts de firebasePosts si es que hay cambios me 
  //los muestra
  useEffect(() => {
    const unsubscribe = listeningPosts((newPosts) => {
      dispatch(setPosts(Object.values(newPosts)))
    });

    return () => {
      // Limpia el listener cuando el componente se desmonta ya que
      //onValue manda undefined si se ejecuta la función
      unsubscribe();
    };
  }, [dispatch]);


  useEffect(() => {
    if(firebasePosts){
      dispatch(setPosts(Object.values(firebasePosts)))
    }
  },[firebasePosts, dispatch])
  
  
  return (
    <View style={styles.container}>
      <FlatList
          ListHeaderComponent={headerFlatList}
          data={posts}
          renderItem={({item}) => <PublicationItem navigation={navigation} publication={item}/>}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );
};

export default Home;
