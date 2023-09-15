import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Logo.svg";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div className={`flex h-[70px] justify-between items-center px-4 sm:px-[30px] ${props.color} `}>
      <div className="logo flex ">
        <Link to="/">
          <img className="h-[25px] md:h-full" src={logo} alt="" />
        </Link>
      </div>

      {/* <div className="relative w-[525px] text-whites">
        <input
          type="text"
          className="w-full  h-10 px-5 pr-10 rounded-lg border  border-white text-xs focus:outline-none bg-transparent"
          placeholder="What do you want to watch?"
        />

        <div className="absolute  right-0 top-0 mt-3 mr-4">
          <FontAwesomeIcon icon={faSearch} color="white" />
        </div>
      </div> */}
      <div className="relative w-[200px] md:w-[525px] rounded-md shadow-md flex items-center">
        <input
          type="text"
          placeholder="What do you want to watch?..."
          className="w-full border text-[10px] border-white py-2 px-4 bg-transparent outline-none rounded-md"
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
          <FontAwesomeIcon className="h-3" icon={faSearch} color="white" />
        </div>
      </div>

      <div className="signUp flex items-center ">
        <p className="text-white mr-5 hidden sm:block">Sign In</p>
        <FontAwesomeIcon
          className="p-2 bg-red-400 rounded-full"
          icon={faBars}
          color="white"
        />
      </div>
    </div>
  );
}

export default Navbar;
