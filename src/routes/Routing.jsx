import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Pages/Homepage";
import MovieDisplayPage from "../Components/Pages/MovieDisplayPage";

function Routing() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Homepage/>} />
        <Route path="/movie" element={<MovieDisplayPage/>} />
        <Route path="/movie/:Id" element={<MovieDisplayPage/>}/>
           

          
       
      </Route>
    </Routes>
  );
}

export default Routing;
