import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageProfile: null,
  userName: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
      };
    },
    clearUser: () => {
      return {
        user: null,
        token: null,
        localId:null
      };
    },
    setProfileImage: (state, action) => {
      return {
        ...state,
        imageProfile: action.payload,
      };
    },
    setUserName: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setProfileImage, setUserName } =
  authSlice.actions;

export default authSlice.reducer;
