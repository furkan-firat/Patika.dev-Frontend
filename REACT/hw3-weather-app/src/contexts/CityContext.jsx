import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Muğla");
  const [trCities, setTrCities] = useState([]);

  useEffect(() => {
    const URL = `https://turkiyeapi.cyclic.app/api/v1/provinces?fields=id%2Cname`;

    axios.get(URL).then((response) => {
      setTrCities(response.data);
    });
  }, []);

  const values = {
    selectedCity,
    setSelectedCity,
    trCities,
    setTrCities,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
