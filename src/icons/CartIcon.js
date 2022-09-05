import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  return (
    <section>
      <FontAwesomeIcon icon={faShoppingCart} />
    </section>
  );
};

export default CartIcon;
