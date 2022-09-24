import React from "react";
import CartIcon from "../icons/CartIcon";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { resetCartItems } from "../redux/cartItemsSlice";

// UNFINISHED
const CartList = () => {
  const cartItems = useSelector((state) => state.getCartItems.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Header as="h4" className="text-dark text-align-center m-auto">
          My Cart
          <span>
            <CartIcon />
          </span>
        </Card.Header>

        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Item</div>
              button?
            </div>
            <Badge bg="primary" pill>
              $14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default CartList;
