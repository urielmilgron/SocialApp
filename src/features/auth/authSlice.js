import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    token:null,
    localId:null,
    imageProfile:null,
    name:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action) => {
            return{
                user:action.payload.data.email,
                token:action.payload.data.idToken,
                localId:action.payload.data.localId,
            }
        },
        clearUser: () => {
            return{
                user:null,
                token:null
            }
        },
        setProfileImage: (state, action) => {
            return{
                ...state,
                imageProfile:action.payload
            }
        },
        setUserName:(state,action) => {
            return{
                ...state,
                name:action.payload
            }
        }
    }
})

export const {setUser, clearUser, setProfileImage} = 
authSlice.actions;

export default authSlice.reducer