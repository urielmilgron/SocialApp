import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Home.style'
import posts from '../../data/posts'
import PublicationItem from './components/PublicationItem'

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={posts}
      keyExtractor={(post) => post}
      renderItem={({item}) => (
        <PublicationItem item={item}/>
      )}
      />
    </View>
  )
}

export default Home