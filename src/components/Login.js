import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [signInStatus, setSignInStatus] = useState(true);
  const [signInErrorMessage, setSignInErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log(message);

    setSignInErrorMessage(message);
    // signIn/signUp
    if (message) return;

    if (!signInErrorMessage) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setSignInErrorMessage(errorMessage);
          // ..
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInErrorMessage(errorMessage);
        });
    }
  };

  const onChangeName = () => {};

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col px-16 py-12 absolute w-[40%]  my-36 right-0 left-0 mx-auto z-10  text-slate-100 bg-slate-800 bg-opacity-70"
      >
        <h1 className="text-3xl py-4 font-bold">
          {signInStatus ? "Sign In" : "Sign Up"}
        </h1>
        {!signInStatus && (
          <input
            ref={name}
            type="text"
            name="Name"
            placeholder="Full Name"
            onChange={onChangeName}
            className="px-2 py-3 my-3 border rounded-sm  border-white bg-transparent"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email Address"
          className="px-2 py-3 my-3 border rounded-sm  border-white bg-transparent"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="px-2 py-3 my-3 border rounded-sm border-white bg-transparent"
        />
        <p className="text-red-600 font-bold text-lg">{signInErrorMessage}</p>
        <button
          type="submit"
          className="py-3 my-3 w-full bg-red-700 border border-none rounded-sm"
          onClick={handleButtonClick}
        >
          {signInStatus ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer">
          {signInStatus ? (
            <span
              onClick={() => {
                setSignInStatus((prevSign) => setSignInStatus(!prevSign));
              }}
            >
              New to Netflix? Sign Up Now
            </span>
          ) : (
            <span
              className="cursor-pointer"
              onClick={() => {
                setSignInStatus((prevSign) => setSignInStatus(!prevSign));
              }}
            >
              Already a user? Sign In Now
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
