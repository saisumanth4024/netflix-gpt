import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInStatus, setSignInStatus] = useState(true);
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
      <form className="flex flex-col px-16 py-12 absolute w-[40%]  my-36 right-0 left-0 mx-auto z-10  text-slate-100 bg-slate-800 bg-opacity-70">
        <h1 className="text-3xl py-4 font-bold">
          {signInStatus ? "Sign In" : "Sign Up"}
        </h1>
        {!signInStatus && (
          <input
            type="text"
            value=""
            name="Name"
            placeholder="Full Name"
            className="px-2 py-3 my-3 border rounded-sm  border-white bg-transparent"
          />
        )}
        <input
          type="text"
          value=""
          name="email"
          placeholder="Email Address"
          className="px-2 py-3 my-3 border rounded-sm  border-white bg-transparent"
        />
        <input
          type="password"
          value=""
          name="password"
          placeholder="Password"
          className="px-2 py-3 my-3 border rounded-sm border-white bg-transparent"
        />
        <button
          type="submit"
          className="py-3 my-3 w-full bg-red-700 border border-none rounded-sm"
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
