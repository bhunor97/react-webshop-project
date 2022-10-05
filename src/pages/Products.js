import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
import ProductsBottomWave from "../waves/products/ProductsBottomWave";
import ProductsTopWave from "../waves/products/ProductsTopWave";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Products = () => {
  const loading = useSelector((state) => state.getLoading.loading);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className="products-section">
      <ProductsTopWave />
      <h1>Products</h1>
      <CategoryAPI />
      <ProductsBottomWave />
    </section>
  );
};

export default Products;
