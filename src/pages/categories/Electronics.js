import React from "react";
import ProductAPI from "../../api/ProductAPI";

const Electronics = () => {
  return (
    <section className="electronics-section">
      <h1>Electronics</h1>
      <div>
        <ProductAPI />
      </div>
    </section>
  );
};

export default Electronics;
