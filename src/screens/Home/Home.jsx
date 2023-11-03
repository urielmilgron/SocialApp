import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./Home.style";
import PublicationItem from "./components/PublicationItem";
import { CreatePostInput } from "../../components/";
import { useGetPublicationsQuery } from "../../services/userApi";
// import { addPost } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const { data, isError, isLoading } = useGetPublicationsQuery();
  // const posts = useSelector((state) => state.user.posts)
  const dispatch = useDispatch()
  const headerFlatList = () => {
    return <CreatePostInput />;
  };

  let posts = data? Object.values(data) : []
  // useEffect(()=> {
  //   if(data){
  //     dispatch(addPost(Object.values(data)))
  //     console.log(posts[0])

  //   }
  // },[data, dispatch])
  
  return (
    <View style={styles.container}>
      { !isLoading && <FlatList
          ListHeaderComponent={headerFlatList}
          data={posts}
          renderItem={({item}) => <PublicationItem navigation={navigation} publication={item}/>}
          key={item => item.id}
        />}
    </View>
  );
};

export default Home;
