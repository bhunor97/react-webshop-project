import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "changeLoading",
  initialState: {
    loading: false,
  },
  reducers: {
    switchLoadingOn: (state) => {
      state.loading = true;
    },
    swithcLoadingOff: (state) => {
      state.loading = false;
    },
  },
});

export const { switchLoadingOn, swithcLoadingOff } = loadingSlice.actions;
export default loadingSlice.reducer;
