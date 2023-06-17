import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import WeatherCard from "../components/weather/WeatherCard";
import BackToHome from "../components/button/navigate_button/BackToHome";
const Weather = () => {
  const [place, setPlace] = useState("");
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=JQQKA7B32A5DBBNY28V9RC423&contentType=json`;
  const [weather, setWeather] = useState([]);
  const handleGetWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(API_URL);
    const data = response.data;
    setWeather(data);
    console.log(weather);
  };

  return (
    <div className="w-screen h-screen bg-[#343a40]">
      <div className='text-white'>
        <BackToHome />
      </div>
      <div className=" flex justify-center items-center flex-col ">
        <h1 className="text-[72px] text-white">Weather</h1>
        <div className="flex flex-row">
          <input
            onChange={(e) => setPlace(e.target.value)}
            className="bg-[#495057] rounded w-[250px] h-[50px] text-[30px] text-white border-none p-[20px] font-sans font-light"
          />
          <button
            onClick={(e) => handleGetWeather(e)}
            className="bg-[#4e5d94] mx-3 p-[10px] h-[50px] w-[70px] rounded text-[20px] text-white"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center flex-row flex-wrap gap-[150px] p-[70px] bg-[#343a40]">
        {weather?.days?.map((item, index) => {
          return <WeatherCard weather={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Weather;
