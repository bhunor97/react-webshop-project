import React from "react";
// COMPONENTS
import themeSwitchFunc from "./ThemeFunc";
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
import CartList from "./CartList";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
// BOOTSTRAP
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const MyCartLoggedStatus = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);

  const displaysignedFunc = () => {
    // LOGGED IN
    if (isSignedIn) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <Alert variant="success">
            <Alert.Heading>Welcome back {loginDetailsName}!</Alert.Heading>
            <p>
              Your are currently logged in with this email address:{" "}
              {loginDetailsEmail}
            </p>
            <hr />
            <p className="mb-0">
              Feel free to browse through your cart and remove any unwanted
              items from the list!
            </p>
          </Alert>
          <CartList />
        </div>
      );
      // NOT LOGGED IN
    } else {
      return (
        <Alert variant="danger" className=" mt-4 mx-auto w-70 ">
          <Alert.Heading>You are currently not logged in!</Alert.Heading>
          <p>
            In order to check your cart, first you have to log in with your
            Gmail account.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant={themeSwitchFunc(theme)}>
              <GoogleOauthLogin />
            </Button>
          </div>
        </Alert>
      );
    }
  };

  // RENDER
  return <div>{displaysignedFunc()}</div>;
};

export default MyCartLoggedStatus;
