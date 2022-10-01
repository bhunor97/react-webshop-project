import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "changeShowAlert",
  initialState: {
    showAlert: true,
  },
  reducers: {
    setShowAlertOff: (state) => {
      state.showAlert = false;
    },
    setShowAlertOn: (state) => {
      state.showAlert = true;
    },
  },
});

export const { setShowAlertOff, setShowAlertOn } = alertSlice.actions;
export default alertSlice.reducer;
