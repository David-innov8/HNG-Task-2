import React from "react";
import Navbar from "../Common/Navbar";
import Body from "../Hompegae/Body";
import Card from "../Common/Card";
import LandingPage from "./LandingPage";
import Footer from "../Common/Footer";
import { useEffect, useState } from "react";
import Movies from "../Hompegae/Movies";

function Homepage() {
  // const bgImgUrl = "https://i.postifmg.cc/3Nmn5bYb/Poster.png"
  // const style = {
  //     backgroundImage: `url(${bgImgUrl})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   };

  return (
    <div>
      <LandingPage />

      <div className="px-12">
        <div className="flex justify-between mt-[60px] mb-[40px]">
          <p className="text-4xl font-bold">Featured Movie</p>
          <a className="text-red">See more {">"} </a>
        </div>

        <Movies />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
