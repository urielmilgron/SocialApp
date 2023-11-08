import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatedAt: Date.now().toLocaleString(),
  posts: [],
  messages: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts =action.payload
      state.updatedAt = new Date().toLocaleString();
    },
    setMessages: (state, action) => {
      state.messages = action.payload
      updatedAt = new Date().toLocaleString()
    }
  
  },
});

export const { setPosts, setMessages } = userSlice.actions;

export default userSlice.reducer;
