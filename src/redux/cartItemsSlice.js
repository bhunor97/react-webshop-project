import { createSlice } from "@reduxjs/toolkit";

export const cartItemsSlice = createSlice({
  name: "changeCartItems",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    resetCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setCartItems, resetCartItems } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
