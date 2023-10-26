import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { Login, Signup } from "../screens";
const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
