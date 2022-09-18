import { createSlice } from "@reduxjs/toolkit";

export const loginDetailSlice = createSlice({
  name: "loginDetailChange",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetName: (state) => {
      state.name = "";
    },
    resetEmail: (state) => {
      state.email = "";
    },
  },
});

export const { setName, setEmail, resetName, resetEmail } =
  loginDetailSlice.actions;
export default loginDetailSlice.reducer;
