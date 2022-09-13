import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productChange",
  initialState: {
    product: "",
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
