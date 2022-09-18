import { createSlice } from "@reduxjs/toolkit";

export const loginStatusSlice = createSlice({
  name: "changeSignIn",
  initialState: {
    signedIn: false,
  },
  reducers: {
    setSignIn: (state) => {
      state.signedIn = true;
    },
    setSignOff: (state) => {
      state.signedIn = false;
    },
  },
});

export const { setSignIn, setSignOff } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
