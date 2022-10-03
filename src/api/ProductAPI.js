import React from "react";
import { useState, useEffect } from "react";
// COMPONENTS
import themeSwitchFunc from "../components/ThemeFunc";
import MySpinner from "../components/MySpinner";
import AddToCartBtn from "../components/AddToCartBtn";
// BOOTSTRAP
import Table from "react-bootstrap/Table";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { switchLoadingOn, swithcLoadingOff } from "../redux/loadingSlice";

const ProductAPI = () => {
  const [currentProducts, setCurrentProducts] = useState([]);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.getCategory.category);
  const theme = useSelector((state) => state.setTheme.theme);
  const loading = useSelector((state) => state.getLoading.loading);

  // console.log(currentProducts);

  // USE EFFECT FETCH
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/category/${category}`;
    dispatch(switchLoadingOn());

    const getProducts = async () => {
      let products = await fetch(URL)
        .then((response) => response.json())
        .catch((err) => console.log(err.message))
        .finally(() => dispatch(swithcLoadingOff()));
      setCurrentProducts(products);
    };
    getProducts();
  }, [category]);

  // MAPPING PRODUCTS
  const productsMapped = () => {
    return currentProducts.map((element, index) => {
      return (
        <div key={index} className="rendered-product-table">
          <Table
            striped
            bordered
            hover
            variant={`${themeSwitchFunc(theme)}`}
            className="shadow"
          >
            <tbody>
              <tr>
                <td className="product-title">{element.title}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={element.image}
                    alt="product-image"
                    className="product-image"
                  />
                </td>
              </tr>
              <tr>
                <td className="product-description">{element.description}</td>
              </tr>
              <tr>
                <td className="product-price">Price: ${element.price}</td>
              </tr>
              <tr>
                <td className="product-rating">
                  Rating: 10 / {element.rating.rate}
                </td>
              </tr>
              <tr>
                <AddToCartBtn element={element} />
              </tr>
            </tbody>
          </Table>
        </div>
      );
    });
  };

  return (
    <>
      {loading ? (
        <MySpinner />
      ) : (
        <div className="product-container">{productsMapped()}</div>
      )}
    </>
  );
};

export default ProductAPI;
