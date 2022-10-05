import React from "react";
import ProductAPI from "../../api/ProductAPI";
// WAVES
import ProductsTopWave from "../../waves/products/ProductsTopWave";
import ProductsBottomWave from "../../waves/products/ProductsBottomWave";

const MensCloth = () => {
  return (
    <section className="mens-clothing-section">
      <ProductsTopWave />
      <h1>Men's Clothing</h1>
      <div>
        <ProductAPI />
      </div>
      <ProductsBottomWave />
    </section>
  );
};

export default MensCloth;
