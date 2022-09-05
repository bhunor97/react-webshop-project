import { React } from "react";
import themeSwitchFunc from "./ThemeFunc";
// BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const HomeButton = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <>
      <Button
        as={Link}
        to="/"
        variant={themeSwitchFunc(theme)}
        size="xl"
        active
      >
        Back To The Home Page
      </Button>
    </>
  );
};

export default HomeButton;
