import React from "react";
import ProductAPI from "../../api/ProductAPI";
// WAVES
import ProductsTopWave from "../../waves/products/ProductsTopWave";
import ProductsBottomWave from "../../waves/products/ProductsBottomWave";

const Electronics = () => {
  return (
    <section className="electronics-section">
      <ProductsTopWave />
      <h1>Electronics</h1>
      <div>
        <ProductAPI />
      </div>
      <ProductsBottomWave />
    </section>
  );
};

export default Electronics;
