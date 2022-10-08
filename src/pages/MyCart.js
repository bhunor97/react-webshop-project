import React from "react";
// COMPONENTS
import MyCartLoggedStatus from "../components/MyCartLoggedStatus";
// WAVES
import CartWaveBottom from "../waves/cart/CartWaveBottom";
import CartWaveTop from "../waves/cart/CartWaveTop";
// REACT-SPRING
import { useSpring, animated } from "react-spring";

const MyCart = () => {
  const topSlide = useSpring({
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: -200, opacity: 0 },
    delay: 200,
  });

  const opacityFade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <section className="my-cart-section">
      <animated.div style={topSlide}>
        <CartWaveTop />
      </animated.div>

      <MyCartLoggedStatus />

      <animated.div style={opacityFade}>
        <CartWaveBottom />
      </animated.div>
    </section>
  );
};

export default MyCart;
