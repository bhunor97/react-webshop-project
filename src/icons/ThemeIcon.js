import React from "react";
import { useEffect } from "react";
import themeSwitchFunc from "../components/ThemeFunc";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
// BOOTSTRAP
import Dropdown from "react-bootstrap/Dropdown";
// REDUX-TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight, setCustom } from "../redux/themeSlice";

const ThemeIcon = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const dispatch = useDispatch();

  // LOCAL SOTRAGE RELOAD
  useEffect(() => {
    let data = window.localStorage.getItem("THEME");
    let parsedData = JSON.parse(data);

    let saveThemeFunc = () => {
      if (parsedData === "dark-theme") {
        return dispatch(setDark());
      } else if (parsedData === "light-theme") {
        return dispatch(setLight());
      } else if (parsedData === "custom-theme") {
        return dispatch(setCustom());
      }
    };
    saveThemeFunc();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("THEME", JSON.stringify(theme));
  }, [theme]);

  return (
    <section className="theme-icon-section">
      <Dropdown>
        <Dropdown.Toggle variant={themeSwitchFunc(theme)} id="dropdown-basic">
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(setDark())}>
            Dark Theme
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setLight())}>
            Light Theme
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setCustom())}>
            Custom Theme
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default ThemeIcon;
