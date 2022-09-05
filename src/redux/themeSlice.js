import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeChange",
  initialState: {
    theme: "dark-theme",
  },
  reducers: {
    setLight: (state) => {
      state.theme = "light-theme";
    },
    setDark: (state) => {
      state.theme = "dark-theme";
    },
    setCustom: (state) => {
      state.theme = "custom-theme";
    },
  },
});

export const { setLight, setDark, setCustom } = themeSlice.actions;
export default themeSlice.reducer;
