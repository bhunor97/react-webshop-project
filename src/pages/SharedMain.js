import React from "react";
// COMPONENTS
import MyNav from "../components/MyNav";
import ThemeIcon from "../icons/ThemeIcon";
// REACT ROUTER
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedMain = () => {
  let theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className={theme}>
      <MyNav />
      <Outlet />
      <ThemeIcon />
    </section>
  );
};

export default SharedMain;
