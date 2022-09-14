import { createSlice } from "@reduxjs/toolkit";

// FOR THE SELECTED CATEGORY
export const categorySlice = createSlice({
  name: "categoryChange",
  initialState: {
    category: "",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
