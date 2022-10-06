import React from "react";
// COMPONENTS
import MyCartLoggedStatus from "../components/MyCartLoggedStatus";
// WAVES
import CartWaveBottom from "../waves/cart/CartWaveBottom";
import CartWaveTop from "../waves/cart/CartWaveTop";

const MyCart = () => {
  return (
    <section className="my-cart-section">
      <CartWaveTop />
      <MyCartLoggedStatus />

      <CartWaveBottom />
    </section>
  );
};

export default MyCart;
