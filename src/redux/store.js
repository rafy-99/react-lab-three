import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer";

export const storeProducts = configureStore({
  reducer: productReducer,
});
