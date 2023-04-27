import React from "react";
import { SearchCityI } from "../shared/model/City";

const CityList = ({
  cityNames,
  onSelectedCity,
}: {
  cityNames: SearchCityI[];
  onSelectedCity: (city: SearchCityI) => void;
}) => {
  return (
    <>
      {cityNames?.length > 0 && (
        <ul className="list">
          {cityNames?.map((city: any) => (
            <li className="items" onClick={() => onSelectedCity(city)}>
              {city?.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CityList;
