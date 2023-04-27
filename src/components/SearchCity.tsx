import React, { useEffect, useState } from "react";
import { getAsyncData } from "../service/api";
import { SearchCityI } from "../shared/model/City";
import CityList from "./CityList";

const SearchCity = ({
  onSelectedCity,
}: {
  onSelectedCity: (city: SearchCityI) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [cityNames, setCityNames] = useState<Array<SearchCityI>>([]);
  useEffect(() => {
    const getData = setTimeout(async () => {
      const response = await getAsyncData("search", "q=" + searchValue);
      setCityNames(response?.data);
    }, 1000);
    return () => clearTimeout(getData);
  }, [searchValue]);

  return (
    <>
      <input
        onChange={(e: any) => setSearchValue(e.target.value)}
        value={searchValue}
        className={`custom-input`}
        placeholder="Seach City"
        data-testid="search-city-input"
      />
      <CityList
        cityNames={cityNames}
        onSelectedCity={(city: SearchCityI) => {
          setCityNames([]);
          onSelectedCity(city);
        }}
      />
    </>
  );
};

export default SearchCity;
