import React, { useState } from "react";
// REACT-BOOTSTRAP
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
// REDUX-TOOLKIT
import themeSwitchFunc from "./ThemeFunc";
import { useSelector, useDispatch } from "react-redux";
import { setShowToastOn, setShowToastOff } from "../redux/showToastSlice";

const UserDetailsToast = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);
  const showToast = useSelector((state) => state.getShowToast.showToast);
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
        <Toast.Body>Your Cart Items: _</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default UserDetailsToast;
