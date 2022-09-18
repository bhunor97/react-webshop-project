import React from "react";
import { useSelector } from "react-redux";

const MyCartLoggedStatus = () => {
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);

  const displaysignedFunc = () => {
    if (isSignedIn) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>You are logged in!</h1>
          <h3>Name: {loginDetailsName}</h3>
          <h3>Email: {loginDetailsEmail}</h3>
        </div>
      );
    } else {
      return <h1>You are not logged in Please log-in first!</h1>;
    }
  };
  return <div>{displaysignedFunc()}</div>;
};

export default MyCartLoggedStatus;
