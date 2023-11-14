import { createContext, useState, useEffect, useContext } from "react";
import CityContext from "./CityContext";
import axios from "axios";
import Error from "../components/Error";
import Today from "../components/Today";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { selectedCity } = useContext(CityContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //  API key from OpenWeather
    const KEY = "R5286B5QB7XN76QWANWZXZECJ";

    // The URL for the OpenWeather API (example)
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/next7days?unitGroup=metric&key=${KEY}&contentType=json`;

    axios
      .get(URL)
      .then((response) => {
        console.log("İstek gönderiliyor...");
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [selectedCity]);

  if (loading) {
    return (
      <div className="spinner-border d-flex align-item-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error msg={error.message} />
      </div>
    );
  }

  const values = {
    weatherData,
    loading,
    error,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
