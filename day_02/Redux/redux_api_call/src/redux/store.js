import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/slice/todo";
import { productApi } from "../features/slice/apiSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [productApi.reducerPath]: productApi.reducer, // ✅ Include the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware), // ✅ Include the API middleware
  // devTools is enabled by default; no need to add manually
});
