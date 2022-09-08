import { React } from "react";
// BOOTSTRAP
import Button from "react-bootstrap/Button";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight, setCustom } from "../redux/themeSlice";

const Home = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  return (
    <section className="home-section">
      <h1>Home</h1>
      <h4>The current theme is: </h4>
      <h2>{theme}</h2>
    </section>
  );
};

export default Home;
