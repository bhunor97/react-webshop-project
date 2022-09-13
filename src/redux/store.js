import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";

// YOU NEED TO IMPORT THIS ON THE COMPONENT U WANNA USE IT
export const store = configureStore({
  reducer: {
    setTheme: themeReducer,
    getCategory: categoryReducer,
  },
});
