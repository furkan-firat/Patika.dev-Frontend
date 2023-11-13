import React from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function WeatherCard({ dayName, tempMin, tempMax, icon, condition }) {
  return (
    <div className="col-2 text-center shadow me-5">
      <div className="card">
        <div className="card-body">
          <h5>{dayName}</h5>
          <hr />
          <img
            className="mb-2 nextweek-icon"
            src={`/src/assets/2nd_Set_Color/${icon}.svg`}
            alt=""
          />
          <h6>{condition}</h6>
          <h6>
            {Math.round(tempMax)}°C
            <span className="text-danger">
              <BsArrowUp />
            </span>
          </h6>
          <h6 className="text-black-50 ">
            {Math.round(tempMin)}°C
            <span className=" text-primary">
              <BsArrowDown />
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
