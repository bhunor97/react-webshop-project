import { createSlice } from "@reduxjs/toolkit";

export const showToastSlice = createSlice({
  name: "changeShowToast",
  initialState: {
    showToast: false,
  },
  reducers: {
    setShowToastOn: (state) => {
      state.showToast = true;
    },
    setShowToastOff: (state) => {
      state.showToast = false;
    },
  },
});

export const { setShowToastOn, setShowToastOff } = showToastSlice.actions;
export default showToastSlice.reducer;
