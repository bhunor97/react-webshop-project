// COMPONENTS
import themeSwitchFunc from "./ThemeFunc";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
// BOOTSTRAP
import Spinner from "react-bootstrap/Spinner";

const MySpinner = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <div className="spinner-div">
      <h3>Please wait ...</h3>
      <Spinner
        className="my-spinner"
        animation="border" // "border" OR "grow"
        variant={
          // theme switched up for the opposites
          theme === "dark-theme"
            ? "light"
            : theme === "light-theme"
            ? "dark"
            : "warning"
        }
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default MySpinner;
