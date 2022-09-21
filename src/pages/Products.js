import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
// BOOTSTRAP
import HomeButton from "../components/HomeButton";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Products = () => {
  const loading = useSelector((state) => state.getLoading.loading);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);

  return (
    <section className="products-section">
      <h1>Products</h1>
      <CategoryAPI />
    </section>
  );
};

export default Products;
