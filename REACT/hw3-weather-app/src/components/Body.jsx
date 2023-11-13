import React from "react";
import { useState, useEffect } from "react";
import NextWeek from "./NextWeek";
import Today from "./Today";
import Details from "./Details";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import axios from "axios";
import { WeatherProvider } from "../contexts/WeatherContext";

function Body() {
  const { selectedCity } = useContext(CityContext);

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <Today />
        <Details />
      </div>
      <NextWeek />
    </div>
  );
}

export default Body;
