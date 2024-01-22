import React from "react";
import logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[20%] ">
      <div className="pt-8 pl-8 ">
        <Link to="/">
          <img className="h-7" src={logo} alt="asdfsd" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
