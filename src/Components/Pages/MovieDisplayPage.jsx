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
function MovieDisplayPage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieDetailsv, setMovieDetailsv] = useState([]);

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

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${Id}/videos?api_key=dc49bd195b7f5780959bf3807018bbe3`;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMovieDetailsv(data.results);
        console.log(movieDetailsv);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  }, [Id]);
  const menu = [
    {
      id: 1,
      title: "Home",
      img: home,
      clicked: false,
    },
    {
      id: 2,
      title: "Movies",
      img: movie,
      clicked: true,
    },
    {
      id: 3,
      title: "Tv Series",
      img: tv,
      clicked: false,
    },
    {
      id: 4,
      title: "Upcoming",
      img: calender,
      clicked: false,
    },
  ];

  const bgImgUrl = Best;
  const style = {
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen flex">
      <div className="left w-[256px] flex flex-col justify-between p-4 rounded-r-[45px] border border-slate-300 h-full">
        <div>
          <Link to="/">
            <img className="h-10 mt-8 mb-10" src={logo} alt="" />
          </Link>
        </div>

        <ul className="-mt-8">
          {menu.map((item) => (
            <div
              className={`flex cursor-pointer w-full h-[65px] items-center justify-center ${
                item.clicked ? "bg-[#be123c] bg-opacity-10" : ""
              }`}
              key={item.id}
            >
              <img className="mr-3" src={item.img} />
              <li className="text-lg font-bold ">{item.title} </li>
            </div>
          ))}
        </ul>
        <div className="p-3 flex flex-col  bg-[#be123c] bg-opacity-10 m-4 rounded-[20px]">
          <p className="text-[13px] p-2">
            Play movie quizes and earn <br />
            free tickets
          </p>
          <p className="text-xs px-2 pb-2">50k people are playing now</p>
          <button className="bg-[#be123c] text-xs bg-opacity-20 rounded-[30px] py-1">
            Start Playing
          </button>
        </div>

        <div className="flex items-center justify-center cursor-pointer">
          <img src={logout} />
          <p className="text-xl ">Log out</p>
        </div>
      </div>

      <div className="right w-full  m-[25px]">
        <div
          className=" mb-[30x`px] h-[250px] rounded-[20px]   flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.poster_path})`,
            backgroundSize: "cover",
          }}
        >
          <FontAwesomeIcon
            icon={faPlay}
            color="white"
            className="text-5xl p-5 "
          />
          <p className="text-[#000000] text-opacity-20">Watch Trailer</p>
        </div>

        <div className="flex mt-3 ">
          <div className="leftt  w-3/4 mr-5 p-2 ">
            <div className="flex items-center  mb-4 text-center">
              <p
                className="text-[19px]  font-medium  mr-10"
                data-testid="movie-title"
              >
                {movieDetails.original_title} |{" "}
                <span data-testid="movie-release-date">
                  {movieDetails.release_date}{" "}
                </span>{" "}
                |{" "}
                <span data-testid="movie-runtime">
                  {(movieDetails.runtime / 60).toFixed(1)} hrs
                </span>
              </p>
              <p></p>
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

            {/* <p>{movieDetails.overview}</p> */}
            <p
              className="text-base font-normal mb-5"
              data-testid="movie-overview"
            >
              {movieDetails.overview}
            </p>
            <p className="text-base font-normal mb-5">
              Director :<span className=" text-red-600">Joseph Kosinski</span>{" "}
            </p>
            <p className="text-base font-normal mb-5">
              Writers :
              <span className=" text-red-600">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>{" "}
            </p>
            <p className="text-base font-normal mb-3">
              Stars :{" "}
              <span className=" text-red-600">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
            <div className=" border flex items-center h-[40px] border-[#C7C7C7] rounded-md">
              <h1 className="bg-[#BE123C] h-full w px-3 py-1 rounded-r-md text-white text-lg">
                Top rated movie #65
              </h1>
              <h1 className="px-3 py-1 text-black text-lg">
                Awards 9 nominations
              </h1>
            </div>
          </div>
          <div className="rightt w-1/4 h-[320px]  flex flex-col items-center ">
            <button className="flex py-1 w-full bg-[#BE123C] mb-3 rounded-[10px] justify-center items-center ">
              <img className="mr-3" src={tickets} />
              See Showtimes
            </button>

            <button className="flex bg-[#BE123C] rounded-[10px] justify-center items-center w-full py-2 bg-opacity-20 mb-3">
              <img className="mr-3" src={list} />
              More watch options
            </button>

            <div className=" h-full rounded-lg" style={style}>
              <div className="h-full flex flex-col justify-end">
                <p className="text-[13px] flex items-center justify-center text-[#E8E8E8] bg-[#121212] bg-opacity-50 hover:bg-opacity-30 text-center py-1">
                  <img src={List2} alt="List icon" />
                  The Best Movies and Shows in September
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDisplayPage;
