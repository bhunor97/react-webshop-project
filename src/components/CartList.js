import React from "react";
// COMPONENTS
import EmptyCartAlert from "./EmptyCartAlert";
import CartIcon from "../icons/CartIcon";
import DeleteItemBtn from "./DeleteItemBtn";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// REDUX-TOOLKIT
import themeSwitchFunc from "./ThemeFunc";
import { useSelector, useDispatch } from "react-redux";
import { resetCartItems } from "../redux/cartItemsSlice";

// UNFINISHED
const CartList = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const cartItems = useSelector((state) => state.getCartItems.cartItems);
  const dispatch = useDispatch();

  const cartItemRender = () => {
    return cartItems.map((element) => {
      return (
        <ListGroup.Item
          as="li"
          variant={themeSwitchFunc(theme)}
          className="d-flex justify-content-center align-items-start w-100"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold ">{element[0].title}</div>
            <DeleteItemBtn />
          </div>
          <Badge
            bg={themeSwitchFunc(theme)}
            className={`mx-3 ${
              theme === "dark-theme" ? "text-light" : "text-dark"
            } `}
            pill
          >
            ${element[0].price}
          </Badge>
        </ListGroup.Item>
      );
    });
  };

  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCartAlert />
      ) : (
        <Card bg={themeSwitchFunc(theme)}>
          <Card.Header
            as="h4"
            className={theme === "dark-theme" ? "text-light" : "text-dark"}
          >
            My Cart
            <span>
              <CartIcon />
            </span>
          </Card.Header>

          <ListGroup as="ol" numbered>
            {cartItemRender()}
          </ListGroup>
        </Card>
      )}
    </>
  );
};

export default CartList;
