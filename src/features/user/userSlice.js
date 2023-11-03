import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  updatedAt: Date.now().toLocaleString(),
  posts: [],
  totalPost: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.user = action.payload.user;
      state.updatedAt = new Date().toLocaleString();
      state.posts.push(action.payload.post);
      state.totalPost += 1;
    },
  },
});

export const { addPost } = userSlice.actions;

export default userSlice.reducer;
