import React, { useEffect, useState } from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import {useGetProfileImageQuery} from '../services/userApi'
import { setProfileImage } from "../features/auth/authSlice";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {data,error,isLoading} = useGetProfileImageQuery(localId)

  useEffect(() => {
    
    if(data){
      dispatch(setProfileImage(data.image))
      console.log(data.image)
    }
  },[data])

  return user? <BottomTabNavigator/> : <AuthStackNavigator/> 
};

export default MainNavigator;
