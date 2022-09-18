// FIREBASE
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/loginStatusSlice";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0B2emkoUgQu6vkczSkThgx0m5KwcI12c",
  authDomain: "reactwebshop-c6816.firebaseapp.com",
  projectId: "reactwebshop-c6816",
  storageBucket: "reactwebshop-c6816.appspot.com",
  messagingSenderId: "978527215538",
  appId: "1:978527215538:web:cd3e62f2493a31793e8eab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// export const mySignInWithGoogle = () => {
//   const dispatch = useDispatch();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//       const name = result.user.displayName;
//       const email = result.user.email;

//       dispatch(setSignIn());
//       window.localStorage.setItem("NAME", name);
//       window.localStorage.setItem("EMAIL", email);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
