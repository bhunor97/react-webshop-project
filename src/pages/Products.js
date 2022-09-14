import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
// BOOTSTRAP
import HomeButton from "../components/HomeButton";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Products = () => {
  const loading = useSelector((state) => state.getLoading.loading);

  return (
    <section className="products-section">
      {/* {!loading && <h1>Products</h1>} */}
      <h1>Products</h1>
      <CategoryAPI />
    </section>
  );
};

export default Products;
