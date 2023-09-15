import React from "react";
import cardimg from "../../Assets/card11.png";
import imdb from "../../Assets/imdb.png";
function Card(props) {
  return (
    <div className="w-[250px] cursor-pointer" data-testid="movie-card">
      <img src={props.img} alt="" data-testid="movie-poster" />
      <p
        className="text-xs font-bold my-2 text-[#9CA3AF]"
        data-testid="movie-release-date"
      >
        {props.releaseDate}
      </p>
      <p className="text-lg font-bold" data-testid="movie-title">
        {props.title}
      </p>
      <div className="flex justify-between my-3">
        <div className="flex items-center">
          <img
            className="h-[14px] mr-3"
            src="https://i.postimg.cc/ZRKH7tYT/imdb.png"
            alt="IMDb"
          />
          <p className="text-xs font-normal">{props.rating} / 10.0</p>
        </div>
        <div className="flex items-center">
          <img
            className="h-[14px] ml-8 mr-3"
            src="https://i.postimg.cc/3xZ0Ny7w/Png-Item-1381056-1.png"
            alt="Rotten Tomatoes"
          />
          <p className="font-normal text-xs">{props.tomatoes}%</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
