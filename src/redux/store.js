import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/api/apiSlice";
import authReducer from "../slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
