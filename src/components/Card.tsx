import React, { useEffect, useState } from "react";
import { getAsyncData } from "../service/api";
import { SearchCityI } from "../shared/model/City";

type CardProps = {
  selectedCity: SearchCityI;
};

const Card = ({ selectedCity }: CardProps) => {
  const [selectedCityData, setSelectedCityData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    onSelectCity(selectedCity);
  }, [selectedCity, selectedCity.name]);

  const onSelectCity = async (city: SearchCityI) => {
    try {
      setisLoading(true);
      const response = await getAsyncData(
        "forecast",
        "q=" + city.name + "&days=5"
      );
      setSelectedCityData(response?.data);
      setisLoading(false);
    } catch (error) {
      console.error(error);
      setisLoading(false);
    }
  };

  return (
    <div className="card mx-2">
      {isLoading ? (
        <div className="loader" />
      ) : (
        <>
          {selectedCity.name} {`(${selectedCity.country})`}
          {selectedCityData?.current?.temp_c} <i className="wi wi-day-sunny" />
          {selectedCityData?.forecast?.forecastday?.map((value: any) => (
            <div className="straight-content">
              {value?.date} -
              <div className="font-weight-bold font-10 ">Max Temp:</div>
              {value?.day?.maxtemp_c}
              <div className="font-weight-bold font-10 ">Min Temp:</div>
              {value?.day?.mintemp_c}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Card;
