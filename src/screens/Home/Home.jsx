import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Home.style'
import data from '../../data/posts'
import PublicationItem from './components/PublicationItem'

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      keyExtractor={(post) => post.id}
      renderItem={({item}) => (
        <PublicationItem publication={item}/>
      )}
      />
    </View>
  )
}

export default Home