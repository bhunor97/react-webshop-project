import React from "react";
// COMPONENTS
import MyCartLoggedStatus from "../components/MyCartLoggedStatus";
// WAVES
import CartWaveBottom from "../waves/cart/CartWaveBottom";
import CartWaveTop from "../waves/cart/CartWaveTop";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import { fade, bottomSlide, rightSlide } from "../components/Animations";

const MyCart = () => {
  return (
    <section className="my-cart-section">
      <animated.div style={useSpring(fade)}>
        <CartWaveTop />
      </animated.div>
      <animated.div style={useSpring(rightSlide)}>
        <MyCartLoggedStatus />
      </animated.div>

      <animated.div style={useSpring(fade)}>
        <CartWaveBottom />
      </animated.div>
    </section>
  );
};

export default MyCart;
