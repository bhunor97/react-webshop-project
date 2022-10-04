import React from "react";
// FONT AWESOME
import CartIcon from "../icons/CartIcon";
// REACT-BOOTSTRAP
import Alert from "react-bootstrap/Alert";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
import themeSwitchFunc from "./ThemeFunc";
// REACT-ROUTER-DOM
import { NavLink } from "react-router-dom";

const EmptyCartAlert = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <Alert variant={themeSwitchFunc(theme)} className="empty-cart-alert">
      Your cart is empty! Check out our
      <NavLink to="/products" className="text-decoration-none ">
        {" "}
        products{" "}
      </NavLink>
      and buy something!
      <CartIcon />
    </Alert>
  );
};

export default EmptyCartAlert;
