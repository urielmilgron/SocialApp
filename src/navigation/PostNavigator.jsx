import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home } from '../screens'

const Stack = createNativeStackNavigator()

export default function PostNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={({}) => ({
      headerTitleAlign: "center",
    })}>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}