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
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((element, index) => {
        return index !== action.payload;
      });
    },
  },
});

export const { setCartItems, resetCartItems, deleteCartItem } =
  cartItemsSlice.actions;
export default cartItemsSlice.reducer;
