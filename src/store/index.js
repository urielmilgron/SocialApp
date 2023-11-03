import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import { authApi } from "../services/authApi";
import { userApi } from "../services/userApi";

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(userApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
