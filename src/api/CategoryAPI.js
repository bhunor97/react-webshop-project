import { current } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

const CategoryAPI = () => {
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    // USE EFFECT FETCH
    const getCategories = async () => {
      const URL = " https://api.escuelajs.co/api/v1/categories";
      let categories = await fetch(URL)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err.message);
        });
      setCurrentProduct(categories);
    };
    getCategories();
  }, []);

  // MAPPING CATEGORIES
  let categoryMap = () => {
    if (currentProduct === []) {
      return <div>Loading</div>;
    } else {
      let mapped = currentProduct.map((element) => {
        return (
          <div key={element.id}>{element.name != "Futbol" && element.name}</div>
        );
      });
      return mapped;
    }
  };
  console.log(categoryMap());

  return <section>{categoryMap()}</section>;
};

export default CategoryAPI;

// You can get the products by category adding the categoryID as a parameter to /categories/{categoryID}/products
// [GET] https://api.escuelajs.co/api/v1/categories/1/products
