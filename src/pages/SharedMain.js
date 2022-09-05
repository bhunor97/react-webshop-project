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
    <main className={theme === "dark-theme" ? "dark-theme" : "light-theme"}>
      <MyNav />
      <Outlet />
      <ThemeIcon />
    </main>
  );
};

export default SharedMain;
