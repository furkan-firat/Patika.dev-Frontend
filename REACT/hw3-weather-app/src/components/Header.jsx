import React, { useEffect, useState } from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";

function Header() {
  const { selectedCity, setSelectedCity, trCities } = useContext(CityContext);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const dropDownItems =
    trCities.data &&
    trCities.data.map((city) => {
      return (
        <Dropdown.Item
          // href="#/action-1"
          key={city.id}
          onClick={() => handleCitySelect(city.name)}
        >
          {city.name}
        </Dropdown.Item>
      );
    });

  return (
    <div className="mt-4 container mb-2">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-light">Select Your City</h1>

        <div className="ms-3">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {selectedCity}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
              {dropDownItems}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
