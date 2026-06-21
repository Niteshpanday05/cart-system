import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.totalPrice = action.payload.totalPrice || 0;
    },

    addItem(state, action) {
      const item = action.payload;

      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.totalQuantity += item.quantity;
      state.totalPrice += item.price * item.quantity;
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { setCart, addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;