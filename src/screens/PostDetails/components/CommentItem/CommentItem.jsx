import { View, Text } from 'react-native'
import React from 'react'

const CommentItem = ({comment}) => {
    console.log(comment)
  return (
    <View>
      <Text>{comment.item.text}</Text>
    </View>
  )
}

export default CommentItem