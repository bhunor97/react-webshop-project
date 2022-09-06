import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
// BOOTSTRAP
import HomeButton from "../components/HomeButton";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <CategoryAPI
      // currentProduct={currentProduct}
      // setCurrentProduct={setCurrentProduct}
      />
      <HomeButton />
    </section>
  );
};

export default Products;
