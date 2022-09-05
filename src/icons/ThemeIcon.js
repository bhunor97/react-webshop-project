import React from "react";
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

  return (
    <section className="theme-icon-section">
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/darkTheme" onClick={() => dispatch(setDark())}>
            Dark Theme
          </Dropdown.Item>
          <Dropdown.Item
            href="#/lightTheme"
            onClick={() => dispatch(setLight())}
          >
            Light Theme
          </Dropdown.Item>
          <Dropdown.Item
            href="#/customTheme"
            onClick={() => dispatch(setCustom())}
          >
            Custom Theme
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default ThemeIcon;
