import React from "react";
import HomeButton from "../components/HomeButton";
import MyCartLoggedStatus from "../components/MyCartLoggedStatus";

const MyCart = () => {
  return (
    <section className="my-cart-section">
      <h1>My Cart</h1>
      <MyCartLoggedStatus />
    </section>
  );
};

export default MyCart;
