import React from "react";
import ProductAPI from "../../api/ProductAPI";
// WAVES
import ProductsTopWave from "../../waves/products/ProductsTopWave";
import ProductsBottomWave from "../../waves/products/ProductsBottomWave";

const Jewelery = () => {
  return (
    <section className="jewelery-section">
      <ProductsTopWave />
      <h1>Jewelery</h1>
      <div>
        <ProductAPI />
      </div>
      <ProductsBottomWave />
    </section>
  );
};

export default Jewelery;
