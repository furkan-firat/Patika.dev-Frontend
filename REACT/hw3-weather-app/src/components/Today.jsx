import React, { useState } from "react";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";

function Today() {
  const { weatherData, loading, error, conditions, temp } =
    useContext(WeatherContext);
  const datetime = weatherData.days[0].datetime;
  const date = new Date(datetime);
  const conditionToday = weatherData.days[0].conditions;
  const tempToday = weatherData.days[0].tempmin;
  const dayOfMonth = date.getDate();
  const iconToday = weatherData.days[0].icon;

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  const dayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  return (
    <div className="col-3 bg-light round-left shadow-lg">
      <h1>{dayName}</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6>
            {monthName} {dayOfMonth}
          </h6>
          <h2>{Math.round(tempToday)}°C</h2>
          <h4>{conditionToday}</h4>
        </div>
        <div>
          <img
            className="w-100 today-icon"
            src={`/src/assets/2nd_Set_Color/${iconToday}.svg`}
            alt="resim"
          />
        </div>
      </div>
    </div>
  );
}

export default Today;
