import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Chat } from '../screens'

const Stack = createNativeStackNavigator()

export default function ChatNavigator() {
  return (
   <Stack.Navigator>
    <Stack.Screen
    name="Chat"
    component={Chat}
    />
   </Stack.Navigator>
  )
}
