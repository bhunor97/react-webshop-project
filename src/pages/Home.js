import { React } from "react";
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return <section className="home-section"></section>;
};

export default Home;
