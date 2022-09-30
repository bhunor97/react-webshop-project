import React from "react";
// COMPONENTS
import EmptyCartAlert from "./EmptyCartAlert";
import CartIcon from "../icons/CartIcon";
import DeleteItemBtn from "./DeleteItemBtn";
import BuyBtn from "./BuyBtn";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// REDUX-TOOLKIT
import themeSwitchFunc from "./ThemeFunc";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems, deleteCartItem } from "../redux/cartItemsSlice";

const CartList = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const cartItems = useSelector((state) => state.getCartItems.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((accum, item) => accum + item[0].price, 0);

  console.log(cartItems);

  const cartItemRender = () => {
    return cartItems.map((element, index) => {
      return (
        <ListGroup.Item
          as="li"
          variant={themeSwitchFunc(theme)}
          className="d-flex justify-content-center align-items-start w-100"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold ">{element[0].title}</div>
            {/* DELETE BTN */}
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => {
                dispatch(deleteCartItem(index));
                // console.log(index);
              }}
            >
              Delete
            </Button>
            {/* DELETE BTN */}
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

  return (
    <>
      {/* IF CART IS EMPTY */}
      {cartItems.length === 0 ? (
        <EmptyCartAlert />
      ) : (
        <>
          {/* IF NOT EMPTY */}
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
          {/* BUY BTN + TOTAL SECTION*/}
          <Card bg={themeSwitchFunc(theme)} className="py-3 w-100">
            <div className="d-flex w-100 align-items-center justify-content-between px-4">
              <div>
                <BuyBtn />
              </div>
              <h3>
                <Badge
                  bg={themeSwitchFunc(theme)}
                  className={
                    theme === "dark-theme" ? "text-light" : "text-dark"
                  }
                >
                  Your Total: ${total}
                </Badge>
              </h3>
            </div>
          </Card>
        </>
      )}
    </>
  );
};

export default CartList;
