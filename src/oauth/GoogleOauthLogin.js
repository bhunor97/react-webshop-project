import React from "react";
import { useEffect } from "react";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// REDUX-TOOLKIT
import { useDispatch, useSelector } from "react-redux";
import { setSignIn, setSignOff } from "../redux/loginStatusSlice";
import { setName, setEmail } from "../redux/loginDetailsSlice";
// FIREBASE
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleOauthLogin = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);

  const mySignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        const name = result.user.displayName;
        const email = result.user.email;

        dispatch(setSignIn());
        dispatch(setName(name));
        dispatch(setEmail(email));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(isSignedIn);
  // console.log(loginDetailsName);
  // console.log(loginDetailsEmail);
  return (
    <>
      {isSignedIn === true ? (
        <div className="text-decoration-none">Log Out</div>
      ) : (
        <div className="text-decoration-none" onClick={mySignInWithGoogle}>
          Log In
        </div>
      )}
    </>
  );
};

export default GoogleOauthLogin;
