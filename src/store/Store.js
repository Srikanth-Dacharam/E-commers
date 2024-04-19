import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../components/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
