import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import productReducer from "@/features/products/productSlice"; // ✅ ADD THIS

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer, // (better naming: plural)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;