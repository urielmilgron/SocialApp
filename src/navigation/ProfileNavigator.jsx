import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Profile } from "../screens";

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={({}) => ({
        headerTitleAlign: "center",
      })}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
