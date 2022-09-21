import React from "react";
// COMPONENTS
import MyNav from "../components/MyNav";
import ThemeIcon from "../icons/ThemeIcon";
import UserDetailsToast from "../components/UserDetailsToast";
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
      <UserDetailsToast />
    </section>
  );
};

export default SharedMain;
