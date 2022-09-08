import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
// BOOTSTRAP
import HomeButton from "../components/HomeButton";

const Products = () => {
  // LIFETD LOADING-SPINNER STATE
  const [loading, setLoading] = useState(true);

  return (
    <section className="products-section">
      {loading === true ? null : <h1>Products</h1>}
      <CategoryAPI loading={loading} setLoading={setLoading} />
    </section>
  );
};

export default Products;
