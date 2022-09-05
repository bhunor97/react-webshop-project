import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

// YOU NEED TO IMPORT THIS ON THE COMPONENT U WANNA USE IT
export const store = configureStore({
  reducer: {
    setTheme: themeReducer,
  },
});
