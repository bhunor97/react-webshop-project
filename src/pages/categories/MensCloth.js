import React from "react";
import ProductAPI from "../../api/ProductAPI";

const MensCloth = () => {
  return (
    <section className="mens-clothing-section">
      <h1>Men's Clothing</h1>
      <div>
        <ProductAPI />
      </div>
    </section>
  );
};

export default MensCloth;
