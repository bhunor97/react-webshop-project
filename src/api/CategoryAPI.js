import { useState, useEffect } from "react";
// COMPONENTS
import MySpinner from "../components/MySpinner";
// REACT-ROUTER
import { Link } from "react-router-dom";
// REACT-BOOTSTRAP
import Card from "react-bootstrap/Card";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import themeSwitchFunc from "../components/ThemeFunc";
import { setSelectedCategory } from "../redux/categorySlice";
import { swithcLoadingOff, switchLoadingOn } from "../redux/loadingSlice";

// IMAGE VARIABLES
const electronicsImg =
  "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const jeweleryImg =
  "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const mensClothImg =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const womensclothImg =
  "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80";

const CategoryAPI = () => {
  const [currentCategories, setCurrentCategories] = useState([]);

  const theme = useSelector((state) => state.setTheme.theme);
  const loading = useSelector((state) => state.getLoading.loading);
  const dispatch = useDispatch();

  console.log(loading);

  // USEEFFECT FETCH
  useEffect(() => {
    const URL = "https://fakestoreapi.com/products/categories";
    dispatch(switchLoadingOn());

    const getCategories = async () => {
      const categories = await fetch(URL)
        .then((response) => response.json())
        .catch((err) => console.log(err.message))
        .finally(() => dispatch(swithcLoadingOff()));
      setCurrentCategories(categories);
    };

    getCategories();
  }, []);

  // IMAGE FUNC
  const categoryImgFunc = (element) => {
    if (element === "electronics") {
      return electronicsImg;
    }
    if (element === "jewelery") {
      return jeweleryImg;
    }
    if (element === "men's clothing") {
      return mensClothImg;
    }
    if (element === "women's clothing") {
      return womensclothImg;
    }
  };

  // SELECTED CATEGORY
  const selectCategoryFunc = (x) => {
    dispatch(setSelectedCategory(x));
  };

  // MAPPING CATEGORIES INTO A LINK / BS CARD
  const categoryMapFunc = () => {
    const mapped = currentCategories.map((element) => {
      return (
        <Link
          to={`${element}`}
          className="category-card-links"
          key={Math.random()}
          onClick={() => selectCategoryFunc(element)}
        >
          <div className="rendered-bs-card">
            <Card className={`bg-${themeSwitchFunc(theme)} shadow border-0`}>
              <Card.Body>
                <Card.Text>{element}</Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                className="category-card-img"
                src={categoryImgFunc(element)}
              />
            </Card>
          </div>
        </Link>
      );
    });
    return mapped;
  };

  // RENDER
  return (
    <>
      {loading ? (
        <MySpinner />
      ) : (
        <div className="category-container">{categoryMapFunc()}</div>
      )}
    </>
  );
};

export default CategoryAPI;
