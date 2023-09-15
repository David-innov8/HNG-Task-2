import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

const ApiContext = createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [apiData, setApiData] = useState(null);
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { Id } = useParams();

  const API_URL = "https://api.themoviedb.org/3/trending/movie/day";
  const API_KEY = "dc49bd195b7f5780959bf3807018bbe3";

  const fetchApiData = async () => {
    try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setApiData(data.results);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=dc49bd195b7f5780959bf3807018bbe3`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  useEffect(() => {
    fetchApiData();
    fetchMovieDetails(Id);
  }, [Id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}
