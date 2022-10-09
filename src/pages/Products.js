import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
import ProductsBottomWave from "../waves/products/ProductsBottomWave";
import ProductsTopWave from "../waves/products/ProductsTopWave";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import { fade, bottomSlide, rightSlide } from "../components/Animations";

const Products = () => {
  const loading = useSelector((state) => state.getLoading.loading);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className="products-section">
      <animated.div style={useSpring(fade)}>
        <ProductsTopWave />
      </animated.div>
      <animated.div style={useSpring(rightSlide)}>
        <h1>Products</h1>
      </animated.div>

      <animated.div style={useSpring(bottomSlide)}>
        <CategoryAPI />
      </animated.div>
      <animated.div style={useSpring(fade)}>
        <ProductsBottomWave />
      </animated.div>
    </section>
  );
};

export default Products;
