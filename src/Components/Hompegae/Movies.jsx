import React from "react";
import { useApi } from "../../Api/Context";
import Card from "../Common/Card";
import { Link } from "react-router-dom";

function Movies() {
  const Movies = useApi();

  const apiData = Movies.slice(0, 12);

  if (!apiData) {
    return <p>Loading...</p>; // You can add a loading state here
  }
  // {
  //     movies.map((item)=>(
  //       <div key={item.id}>
  //         <img src={API_IMG+item.backdrop_path}/>
  //         <h5>{item.release_date}</h5>
  //         <p>{item.original_title}</p>
  //         <p>{item.vote_average}</p>

  //       </div>
  //     ))
  //   }
  return (
    <div className="flex flex-wrap  gap-y-10 justify-between">
      {apiData.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
          <Card
            key={movie.id} // Make sure each Card has a unique key
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // Adjust the path to your image
            title={movie.title}
            rating={movie.vote_average}
          />
        </Link>
      ))}
    </div>
  );
}

export default Movies;
