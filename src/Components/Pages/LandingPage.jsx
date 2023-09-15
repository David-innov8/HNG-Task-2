import React from "react";
import Navbar from "../Common/Navbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import play from "../../Assets/Play.svg";
import { useApi } from "../../Api/Context";
function LandingPage(props) {
  const apidata = useApi();

  const bgImgUrl = "https://i.postimg.cc/3Nmn5bYb/Poster.png";
  const style = {
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen   " style={style}>
      <Navbar color="bg-transparent" />
      <div className=" md:px-5 text-white w-[404px] py-[98px] mx-[30px] ">
        <h1 className="font-bold text-base md:text-5xl">
          John Wick 3: <br /> Parabellum
        </h1>
        <div className="flex items-center py-3">
          <img
            className="h-[14px] mr-3"
            src="https://i.postimg.cc/ZRKH7tYT/imdb.png"
          />
          <p className=" font-normal text-xs">8.60/10.0</p>
          <img
            className="h-[14px] ml-8 mr-3"
            src="https://i.postimg.cc/3xZ0Ny7w/Png-Item-1381056-1.png"
          />
          <p className=" font-normal text-xs ">97%</p>
        </div>
        <p className=" text-xs w-[200px] md:w-[500px] md:text-lg font-medium pb-3">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className=" px-4 py-[6px] flex items-center rounded-[6px] bg-[#BE123C]">
          <img src={play} alt="" />
          <p className="text-sm ml-3">Watch Trailer</p>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
