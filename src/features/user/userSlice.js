import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatedAt: Date.now().toLocaleString(),
  posts: [],
  messages: [],
  comments: []
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
    },
    setComments: (state, action) => {
      state.comments = action.payload
      updatedAt = new Date().toLocaleString()
    }
  },
});

export const { setPosts, setMessages, setComments } = userSlice.actions;

export default userSlice.reducer;
