import React from "react";
import HomeButton from "../components/HomeButton";
import MyCartLoggedStatus from "../components/MyCartLoggedStatus";

const MyCart = () => {
  return (
    <section className="my-cart-section d-flex  align-items-center justify-content-center mt-5">
      {/* <h1>My Cart</h1> */}
      <MyCartLoggedStatus />
    </section>
  );
};

export default MyCart;
