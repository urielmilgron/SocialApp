import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updatedAt: Date.now().toLocaleString(),
    posts:[],
    messages:[],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.posts.push(action.payload)
            state = {
                ...state,
                updatedAt: new Date().toLocaleString()            }
        }
    }
})

export const {addPost} = userSlice.actions

export default userSlice.reducer