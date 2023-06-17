import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTemperatureThreeQuarters,faTemperatureArrowUp, faTemperatureArrowDown, faPerson, faDroplet} from "@fortawesome/free-solid-svg-icons";
const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-[#7289da] text-white p-[30px] rounded-lg flex justify-center items-center flex-col">
      <img
        src={`../../../src/assets/weather_icons/${weather?.icon}.svg`}
        alt={weather?.currentConditions?.icon}
        className="w-[100px] h-[100px]"
      />
      <div className="self-start">
        <h1>
          <FontAwesomeIcon icon={faCalendar} className="mr-[10px]" /> {weather?.datetime}
        </h1>
        <h1>
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="mr-[10px]" /> {weather?.temp}
          °C
        </h1>
        <h1>
          <FontAwesomeIcon icon={faPerson} className="mr-[10px]" />
          {weather?.feelslike}°C
        </h1>
        <h1>
          <FontAwesomeIcon icon={faTemperatureArrowUp} className="mr-[10px]" />
          {weather?.tempmax}°C
        </h1>
        <h1>
          <FontAwesomeIcon icon={faTemperatureArrowDown} className="mr-[10px]" />
          {weather?.tempmin}°C
        </h1>
        <h1>
          <FontAwesomeIcon icon={faDroplet} className="mr-[10px]" />
          {weather?.humidity}%
        </h1>
      </div>
    </div>
  );
};

export default WeatherCard;
