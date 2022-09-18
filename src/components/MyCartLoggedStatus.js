import React from "react";
// COMPONENTS
import themeSwitchFunc from "./ThemeFunc";
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
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
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>You are logged in!</h1>
          <h3>Name: {loginDetailsName}</h3>
          <h3>Email: {loginDetailsEmail}</h3>
        </div>
      );
      // NOT LOGGED IN
    } else {
      return (
        <Alert variant="danger" className=" mt-4 mx-auto w-50 ">
          <Alert.Heading>You are currently not logged in!</Alert.Heading>
          <p>
            In order to check your cart first you have to log in with your Gmail
            account.
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
