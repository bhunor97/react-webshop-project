import React, { useState } from "react";
// REACT-BOOTSTRAP
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
// REDUX-TOOLKIT
import themeSwitchFunc from "./ThemeFunc";
import { useSelector, useDispatch } from "react-redux";
import { setShowToastOn, setShowToastOff } from "../redux/showToastSlice";
import { resetCartItems } from "../redux/cartItemsSlice";
// REACT-ROUTER-DOM
import { NavLink } from "react-router-dom";

const UserDetailsToast = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);
  const showToast = useSelector((state) => state.getShowToast.showToast);
  const cartItems = useSelector((state) => state.getCartItems.cartItems);
  const dispatch = useDispatch();

  return (
    <ToastContainer>
      <Toast
        className="user-toast"
        bg={themeSwitchFunc(theme)}
        show={showToast === true ? true : false}
        onClose={() => dispatch(setShowToastOff())}
      >
        <Toast.Header className="text-dark">
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Hi {loginDetailsName}!</strong>
          <small className="text-muted">{loginDetailsEmail}</small>
        </Toast.Header>
        <Toast.Body className="d-flex align-items-center justify-content-between">
          Items in your cart: {cartItems.length}
          {/* GO TO CART BUTTON */}
          <Button as={NavLink} to="/mycart" variant="outline-success" size="sm">
            Go to Cart
          </Button>
          {/* RESET BUTTON */}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              dispatch(resetCartItems());
            }}
          >
            Reset Cart
          </Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default UserDetailsToast;
