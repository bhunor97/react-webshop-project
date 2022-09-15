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

  console.log(category);

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
    return currentProducts.map((element) => {
      return (
        <div className="rendered-product-table">
          <Table
            striped
            bordered
            hover
            variant={`${themeSwitchFunc(theme)}`}
            className="shadow"
          >
            <tbody key={element.id}>
              <tr>
                <td className="rendered-product-title">{element.title}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={element.image}
                    alt="product-image"
                    className="rendered-product-image"
                  />
                </td>
              </tr>
              <tr>
                <td>{element.description}</td>
              </tr>
              <tr>
                <td>Price: ${element.price}</td>
              </tr>
              <tr>
                <td>Rating: 10 / {element.rating.rate}</td>
              </tr>
              <tr>
                <AddToCartBtn />
              </tr>
            </tbody>
          </Table>
        </div>
      );
    });
  };

  return <div>{loading ? <MySpinner /> : productsMapped()}</div>;
};

export default ProductAPI;
