import React from "react";
// REDUX-TOOLKIT
import { useDispatch, useSelector } from "react-redux";
import { setSignIn, setSignOff } from "../redux/loginStatusSlice";
import {
  setName,
  setEmail,
  resetName,
  resetEmail,
} from "../redux/loginDetailsSlice";
import { setShowToastOff, setShowToastOn } from "../redux/showToastSlice";
// FIREBASE
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleOauthLogin = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);
  const loginDetailsName = useSelector((state) => state.getLoginDetails.name);
  const loginDetailsEmail = useSelector((state) => state.getLoginDetails.email);

  // SIGN IN FUNC
  const mySignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        const name = result.user.displayName;
        const email = result.user.email;

        dispatch(setSignIn());
        dispatch(setName(name));
        dispatch(setEmail(email));
        dispatch(setShowToastOn());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // SIGN OUT FUNC
  const mySignOut = () => {
    dispatch(setSignOff());
    dispatch(resetName());
    dispatch(resetEmail());
    dispatch(setShowToastOff());
  };

  // RENDER
  return (
    <>
      {isSignedIn === true ? (
        <div className="text-decoration-none" onClick={mySignOut}>
          Log Out
        </div>
      ) : (
        <div className="text-decoration-none" onClick={mySignInWithGoogle}>
          Log In
        </div>
      )}
    </>
  );
};

export default GoogleOauthLogin;
