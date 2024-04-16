import React from "react";
import { NETFLIX_IMAGE_URL } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <img
        className="absolute w-60 px-8 py-8 bg-gradient-to-b from-black z-10"
        src={NETFLIX_IMAGE_URL}
        alt="netflix-logo"
      />
    </div>
  );
};

export default Header;
