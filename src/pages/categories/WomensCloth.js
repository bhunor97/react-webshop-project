import React from "react";
import ProductAPI from "../../api/ProductAPI";

const WomensCloth = () => {
  return (
    <section className="womens-clothing-section">
      <h1>Women's Clothing</h1>
      <div>
        <ProductAPI />
      </div>
    </section>
  );
};

export default WomensCloth;
