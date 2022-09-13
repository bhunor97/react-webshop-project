import { useState } from "react";
// COMPONENTS
import CategoryAPI from "../api/CategoryAPI";
// BOOTSTRAP
import HomeButton from "../components/HomeButton";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Products = () => {
  const category = useSelector((state) => state.getCategory.category);

  // console.log(category);

  // LIFTED LOADING-SPINNER STATE
  const [loading, setLoading] = useState(true);

  return (
    <section className="products-section">
      <h1>Products</h1>
      <CategoryAPI loading={loading} setLoading={setLoading} />
    </section>
  );
};

export default Products;
