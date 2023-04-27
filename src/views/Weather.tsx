import React, { useState } from "react";
import Card from "../components/Card";
import { SearchCityI } from "../shared/model/City";
import SearchCity from "../components/SearchCity";

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState<SearchCityI>();

  return (
    <div className="container">
      <div className="container-flex">
        <h1>Weather Forecast</h1>
        <SearchCity
          onSelectedCity={(city: SearchCityI) => setSelectedCity(city)}
        />
        <div className="cards-container">
          {selectedCity && <Card selectedCity={selectedCity} />}
        </div>
      </div>
    </div>
  );
};

export default Weather;
