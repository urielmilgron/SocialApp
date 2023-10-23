import { View, Text } from 'react-native'
import React from 'react'

const PublicationItem = ({publication}) => {
  return (
    <View>
      <Text>{publication.user}</Text>
      <Text>{publication.createdTime}</Text>
      <Text>{publication.content}</Text>
    </View>
  )
}

export default PublicationItem