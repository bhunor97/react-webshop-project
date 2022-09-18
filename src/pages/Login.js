import React from "react";

// REDUX-TOOLKIT
import themeSwitchFunc from "../components/ThemeFunc";
import { useSelector } from "react-redux";

// UNFINISHED -> Display to Cart when user not logged in
const Login = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return <section className="login-section">Please LogIn First</section>;
};

export default Login;
