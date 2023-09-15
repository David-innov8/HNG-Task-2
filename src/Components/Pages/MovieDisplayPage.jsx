import React from "react";
import logo from "../../Assets/Logo22.png";
import home from "../../Assets/Home.svg";
import movie from "../../Assets/Movie Projector.svg";
import tv from "../../Assets/TV Show.svg";
import calender from "../../Assets/Calendar.svg";
import logout from "../../Assets/Logout.svg";
import tickets from "../../Assets/Two Tickets.svg";
import list from "../../Assets/List.svg";
import List2 from "../../Assets/List2.svg";
import Best from "../../Assets/best.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useApi } from "../../Api/Context";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
function MovieDisplayPage(props) {
  const [movieDetails, setMovieDetails] = useState([]);

  const { Id } = useParams();
  // const apidata = useApi()
  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${Id}?api_key=dc49bd195b7f5780959bf3807018bbe3`;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMovieDetails(data);
        console.log(movieDetails);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  }, [Id]);

  const bgImgUrl = Best;

  return (
    <div className="h-screen  ">
      <Navbar color="bg-blue-950" />
      <div className="  ">
        <div className="h-70v   bg-green-950 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            alt="Movie Backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-5 cursor-pointer hover:bg-slate-300 hover:bg-opacity-20">
            <FontAwesomeIcon icon={faPlay} color="white" className="text-5xl" />
          </div>
        </div>

        <div className=" mt-3  ">
          <div className=" md:px-20 flex flex-col items-center text-center p-2 ">
            <div className="flex flex-col items-center md:flex  ">
              <p className="text-[17px]  font-bold  " data-testid="movie-title">
                {movieDetails.original_title} |{" "}
                <span data-testid="movie-release-date">
                  {movieDetails.release_date}{" "}
                </span>{" "}
                |{" "}
                <span data-testid="movie-runtime">
                  {(movieDetails.runtime / 60).toFixed(1)} hrs
                </span>
              </p>

              <div className=" flex items-between ">
                {movieDetails.genres
                  ? movieDetails.genres.map((genre) => (
                      <div
                        key={genre.id}
                        className=" py-1 px-4 rounded-[15px]  text-center border  border-[#F8E7EB]"
                      >
                        <p className="text-[12px] text-[#B91C1C] font-[600]">
                          {genre.name}
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>

            <p
              className="text-base font-normal mb-5"
              data-testid="movie-overview"
            >
              {movieDetails.overview}
            </p>
            <p className="text-base font-normal mb-5">
              Status :<span className=" ">{movieDetails.status}</span>{" "}
            </p>
            <p className="text-base font-medium mb-5">
              Tagline :
              <span className="font-bold ">{movieDetails.tagline}</span>{" "}
            </p>
            <p className="text-base font-normal mb-3">
              Original Langugae :{" "}
              <span className=" font-bold">
                {movieDetails.original_language}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDisplayPage;
