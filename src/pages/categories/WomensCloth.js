import React from "react";
import ProductAPI from "../../api/ProductAPI";
// WAVES
import ProductsTopWave from "../../waves/products/ProductsTopWave";
import ProductsBottomWave from "../../waves/products/ProductsBottomWave";

const WomensCloth = () => {
  return (
    <section className="womens-clothing-section">
      <ProductsTopWave />
      <h1>Women's Clothing</h1>
      <div>
        <ProductAPI />
      </div>
      <ProductsBottomWave />
    </section>
  );
};

export default WomensCloth;
