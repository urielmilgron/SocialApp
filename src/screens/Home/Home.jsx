import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Home.style'
import data from '../../data/posts'
import PublicationItem from './components/PublicationItem'
import {CreatePostInput} from '../../components/'

const Home = () => {
  const headerFlatList = () => {
    return <CreatePostInput/>
  }
  return (
    <View style={styles.container}>
      <FlatList
      ListHeaderComponent={headerFlatList}
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