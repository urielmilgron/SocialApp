import { configureStore } from "@reduxjs/toolkit";
import {setupListeners } from '@reduxjs/toolkit/dist/query'
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice"
import { authApi } from "../services/authApi";
import { userApi } from "../services/userApi";

const store = configureStore({
    reducer:{
        auth: authSlice,
        user: userSlice,
        [authApi.reducerPath]:authApi.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, userApi.middleware)
})

setupListeners(store.dispatch)
export default store