import React from "react";
// REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Style.scss";
// PAGES
import SharedMain from "./pages/SharedMain";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import Error from "./pages/Error";
import Login from "./pages/Login.js";
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
              <Route path="mycart" element={<MyCart />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
};

export default App;
