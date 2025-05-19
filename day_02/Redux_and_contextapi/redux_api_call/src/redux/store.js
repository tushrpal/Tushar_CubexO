import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/slice/todo";
import { productApi } from "../features/slice/apiSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [productApi.reducerPath]: productApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware), 
});
