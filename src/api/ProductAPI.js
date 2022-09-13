import React from "react";
import { useState, useEffect } from "react";
// COMPONENTS
import themeSwitchFunc from "../components/ThemeFunc";
// BOOTSTRAP
import Table from "react-bootstrap/Table";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const ProductAPI = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const category = useSelector((state) => state.getCategory.category);
  const theme = useSelector((state) => state.setTheme.theme);

  // USE EFFECT FETCH
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/category/${category}`;

    const getProducts = async () => {
      let products = await fetch(URL)
        .then((response) => response.json())
        .catch((err) => console.log(err.message));
      setCurrentProducts(products);
    };

    getProducts();
  }, [category]);

  console.log(currentProducts);

  // MAPPING PRODUCTS
  const productsMapped = () => {
    return currentProducts.map((element) => {
      return (
        <Table
          striped
          bordered
          hover
          variant={`${themeSwitchFunc(theme)}`}
          key={element.id}
        >
          <tbody>
            <tr>
              <td>{element.title}</td>
            </tr>
            <tr>
              <td>{element.image}</td>
            </tr>
            <tr>
              <td>{element.description}</td>
            </tr>
            <tr>
              <td>{element.price}</td>
            </tr>
            <tr>
              <td>{element.rating.rate}</td>
            </tr>
          </tbody>
        </Table>
      );
    });
  };

  return <div>{productsMapped()}</div>;
};

export default ProductAPI;
