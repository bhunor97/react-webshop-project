import React from "react";
// COMPONENTS
import EmptyCartAlert from "./EmptyCartAlert";
import CartIcon from "../icons/CartIcon";
import DeleteItemBtn from "./DeleteItemBtn";
import BuyBtn from "./BuyBtn";
import CartResetBtn from "./CartResetBtn";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// REDUX-TOOLKIT
import themeSwitchFunc from "./ThemeFunc";
import { useSelector, useDispatch } from "react-redux";
import { resetCartItems } from "../redux/cartItemsSlice";

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

  // TOTAL AMOUNT
  const total = cartItems.reduce((accum, item) => accum + item[0].price, 0);

  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCartAlert />
      ) : (
        <>
          <Card bg={themeSwitchFunc(theme)} className="mt-5">
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
          {/* TOTAL -- UNFINISHED */}

          <ListGroup
            horizontal={"sm"}
            className="my-5 d-flex align-items-center justify-content-center w-100"
          >
            <ListGroup.Item
              as={Button}
              className="w-50"
              variant={themeSwitchFunc(theme)}
            >
              {/* <BuyBtn /> */}
              Buy
            </ListGroup.Item>
            <ListGroup.Item
              as={Button}
              className="w-50 mx-5"
              variant={themeSwitchFunc(theme)}
            >
              {/* <CartResetBtn /> */}
              Reset
            </ListGroup.Item>
            <ListGroup.Item className="w-50" variant={themeSwitchFunc(theme)}>
              Your Total: ${total}
            </ListGroup.Item>
          </ListGroup>
        </>
      )}
    </>
  );
};

export default CartList;
