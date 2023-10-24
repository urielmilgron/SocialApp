import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './Home.style'
import data from '../../data/posts'
import PublicationItem from './components/PublicationItem'
import {CreatePostInput} from '../../components/'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
      <CreatePostInput/>
      <FlatList
      data={data}
      keyExtractor={(post) => post.id}
      renderItem={({item}) => (
        <PublicationItem publication={item}/>
      )}
      />
    </ScrollView>
  )
}

export default Home