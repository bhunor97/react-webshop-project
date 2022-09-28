import React from "react";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setCartItems, deleteCartItem } from "../redux/cartItemsSlice";

const DeleteItemBtn = () => {
  const cartItems = useSelector((state) => state.getCartItems.cartItems);
  const dispatch = useDispatch();

  return (
    <Button
      variant="outline-danger"
      size="sm"
      // onClick={() => {
      //   dispatch(deleteCartItem(element));
      // }}
    >
      Delete
    </Button>
  );
};

export default DeleteItemBtn;
