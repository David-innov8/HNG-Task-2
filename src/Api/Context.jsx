import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiKey } from './config';
const ApiDataContext = createContext();

export function useApiData() {
  return useContext(ApiDataContext);
}

export function ApiDataProvider({ children }) {
  const [apiData, setApiData] = useState([]);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ5YmQxOTViN2Y1NzgwOTU5YmYzODA3MDE4YmJlMyIsInN1YiI6IjY0ZmUzYWI0ZmE0MDQ2MDBjNDEzNzUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf3qTmtauObKhRb6KhGB6oMTLbnJka9U2AbrmR5_Yq0'
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  const fetchData = () => {
    // Fetch your API data while including the API key in the headers
    fetch('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error(error));
  };
  // You can include other utility functions here

  return (
    <ApiDataContext.Provider value={{ apiData, fetchData }}>
      {children}
    </ApiDataContext.Provider>
  );
}
