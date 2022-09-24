import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";
import loadingReducer from "./loadingSlice";
import loginReducer from "./loginStatusSlice";
import loginDetailsReducer from "./loginDetailsSlice";
import showToastReducers from "./showToastSlice";
import cartItemsReducer from "./cartItemsSlice";

// YOU NEED TO IMPORT THIS ON THE COMPONENT U WANNA USE IT
export const store = configureStore({
  reducer: {
    setTheme: themeReducer,
    getCategory: categoryReducer,
    getLoading: loadingReducer,
    getSignedIn: loginReducer,
    getLoginDetails: loginDetailsReducer,
    getShowToast: showToastReducers,
    getCartItems: cartItemsReducer,
  },
});
