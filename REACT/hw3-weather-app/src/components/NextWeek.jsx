import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";

function NextWeek() {
  const { weatherData } = useContext(WeatherContext);

  // 3 days of the week
  const firstRow = weatherData.days.slice(1, 4).map((day, index) => {
    const datetime = day.datetime;
    const date = new Date(datetime);
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);

    return (
      <WeatherCard
        key={index}
        dayName={dayName}
        tempMin={day.tempmin}
        tempMax={day.tempmax}
        icon={day.icon}
        condition={day.conditions}
      />
    );
  });

  // 3 days of the week
  const secondRow = weatherData.days.slice(4, 7).map((day, index) => {
    const datetime = day.datetime;
    const date = new Date(datetime);
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    return (
      <WeatherCard
        key={index}
        dayName={dayName}
        tempMin={day.tempmin}
        tempMax={day.tempmax}
        icon={day.icon}
        condition={day.conditions}
      />
    );
  });

  return (
    <div className="container pt-4">
      <div className=" d-flex justify-content-center mb-4">{firstRow}</div>
      <div className=" d-flex justify-content-center mb-4">{secondRow}</div>
    </div>
  );
}

export default NextWeek;
