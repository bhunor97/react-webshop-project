import React from "react";
// SASS
import "./style/Resets.scss";
import "./style/Category.scss";
import "./style/Theme.scss";
import "./style/Product.scss";
import "./style/Spinner.scss";
import "./style/Toast.scss";
import "./style/MyCart.scss";
import "./style/Alert.scss";
import "./style/WavesHome.scss";
import "./style/WavesProducts.scss";
import "./style/WavesTheme.scss";
import "./style/WavesContact.scss";
import "./style/WavesCart.scss";
import "./style/ContactPage.scss";
// REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// PAGES
import SharedMain from "./pages/SharedMain";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import Error from "./pages/Error";
import Electronics from "./pages/categories/Electronics";
import MensCloth from "./pages/categories/MensCloth";
import WomensCloth from "./pages/categories/WomensCloth";
import Jewelery from "./pages/categories/Jewelery";
// REDUX-TOOLKIT
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedMain />}>
              <Route index element={<Home />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="products" element={<Products />}></Route>
              {/* PRODUCT-CATEGORIES */}
              <Route
                path="products/electronics"
                element={<Electronics />}
              ></Route>
              <Route
                path="products/men's%20clothing"
                element={<MensCloth />}
              ></Route>
              <Route
                path="products/women's%20clothing"
                element={<WomensCloth />}
              ></Route>
              <Route path="products/jewelery" element={<Jewelery />}></Route>
              {/* NAV-BAR */}
              <Route path="mycart" element={<MyCart />}></Route>
              {/* ERROR */}
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
};

export default App;
