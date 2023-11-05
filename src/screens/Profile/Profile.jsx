import { View, Text, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Profile.style";
import * as ImagePicker from "expo-image-picker";
import { clearUser, setProfileImage } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../../services/userApi"
import { listeningPosts } from "../../firebase/firebaseListeners";
import { filterByDate } from "../../utilities/filterByDate";
import { setPosts } from "../../features/user/userSlice";




const Profile = () => {
  const image = useSelector(state => state.auth.imageProfile)
  const {localId} = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [imageState, setimageState] = useState(null)

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    setError(null)
    const isCameraOk = await verifyCameraPermissions()

    if(isCameraOk){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[9,16],
            base64:true,
            quality:0.3
        })
        if(!result.canceled){
          dispatch(setProfileImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            //setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        }
    } else{
      setError('Se necesitan permisos para tomar la foto!')
    }
  }

  const confirmImage = () => {
    triggerSaveProfileImage({image, localId})
    console.log(result)
    if(result.isSuccess){
      setimageState("La foto fue guardada con exito!")
    } else if(result.error || result.isUninitialized){
      setimageState("Intentelo de nuevo")
    } if (!image){
      setimageState("Todavia no tomó una foto!")
    }
  }

  useEffect(() => {
    const unsubscribe = listeningPosts((newPosts) => {
      if (newPosts) {
        const filterArray = filterByDate(newPosts);
        dispatch(setPosts(filterArray));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [result.isSuccess]);

  const sesionOff = () => {
    dispatch(clearUser())
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageAndButtons}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:image? image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={{ color: "white" }}>Tomar foto</Text>
        </Pressable>
       {error &&  <Text style={styles.error}>{error}</Text>}
        <Pressable style={styles.button} onPress={confirmImage}>
          <Text style={{ color: "white" }}>Guardar foto</Text>
        </Pressable>
        {imageState &&  <Text style={styles.error}>{imageState}</Text>}
      </View>
      <Pressable style={[styles.button, styles.buttonOff]} onPress={sesionOff}>
          <Text style={{ color: "white" }}>Cerrar sesión</Text>
        </Pressable>
    </View>
  );
};

export default Profile;