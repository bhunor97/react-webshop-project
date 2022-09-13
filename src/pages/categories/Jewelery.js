import React from "react";
import ProductAPI from "../../api/ProductAPI";

const Jewelery = () => {
  return (
    <section className="jewelery-section">
      <h1>Jewelery</h1>
      <div>
        <ProductAPI />
      </div>
    </section>
  );
};

export default Jewelery;
