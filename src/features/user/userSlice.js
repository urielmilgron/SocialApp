import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatedAt: Date.now().toLocaleString(),
  posts: [],
  totalPost: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts =action.payload
      state.updatedAt = new Date().toLocaleString();
      state.totalPost = state.posts.length
    }
   
  },
});

export const { setPosts } = userSlice.actions;

export default userSlice.reducer;
