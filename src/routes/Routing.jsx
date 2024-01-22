import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Login from "../Pages/Auth/Login/Login";

function Routing() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Routing;
