import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
import ProductsBottomWave from "../waves/products/ProductsBottomWave";
import ProductsTopWave from "../waves/products/ProductsTopWave";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
// REACT-SPRING
import { useSpring, animated } from "react-spring";

const Products = () => {
  const loading = useSelector((state) => state.getLoading.loading);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const theme = useSelector((state) => state.setTheme.theme);

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
    <section className="products-section">
      <animated.div style={topSlide}>
        <ProductsTopWave />
      </animated.div>
      <animated.div style={opacityFade}>
        <h1>Products</h1>
        <CategoryAPI />
      </animated.div>
      <animated.div style={opacityFade}>
        <ProductsBottomWave />
      </animated.div>
    </section>
  );
};

export default Products;
