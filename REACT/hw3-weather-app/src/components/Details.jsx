import React from "react";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

function Details() {
  const { weatherData } = useContext(WeatherContext);
  const tempMax = weatherData.days[0].tempmax;
  const tempMin = weatherData.days[0].tempmin;
  const feelsLike = weatherData.days[0].feelslike;
  const humidity = weatherData.days[0].humidity;
  const windSpeed = weatherData.days[0].windspeed;
  return (
    <div className="col-2 bg-light round-right">
      <h3>Details</h3>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Feels Like:</h6>
        <h6>{Math.floor(feelsLike)}°C</h6>
      </div>

      <div className="d-flex justify-content-between">
        <h6>Max Temp:</h6>
        <h6 className="d-flex align-items-center">
          {Math.floor(tempMax)}°C
          <span className="text-danger">
            <BsArrowUp />
          </span>
        </h6>
      </div>

      <div className="d-flex justify-content-between">
        <h6>Min Temp: </h6>
        <h6 className="d-flex align-items-center">
          {Math.floor(tempMin)}°C
          <span className="text-primary">
            <BsArrowDown />
          </span>
        </h6>
      </div>

      <div className="d-flex justify-content-between">
        <h6>Humidity:</h6>
        <h6 className="d-flex align-items-center">
          {Math.floor(humidity)}
          <span>
            <WiHumidity className="icon-larger text-primary" />
          </span>
        </h6>
      </div>

      <div className="d-flex justify-content-between">
        <h6>Wind:</h6>
        <h6 className="d-flex align-items-center">
          {windSpeed} km/h
          <span>
            <WiStrongWind className="text-secodnary icon-larger ms-1" />
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Details;
