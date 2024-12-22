import React from "react";
import WeatherEventCard from "./shared/WeatherEventCard";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { PiWind } from "react-icons/pi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import SunTimeCard from "./shared/SunTimeCard";
import { WeatherResponse } from "@/types";

type Props = {
  weatherdata?: WeatherResponse;
};

const WeatherDisplay = (props: Props) => {
  const speedInKmHr = props.weatherdata?.humidity
    ? (props.weatherdata?.humidity * 3.6).toFixed(2)
    : 0;
  const visibilityInKm = props.weatherdata?.visibility
    ? (props.weatherdata?.humidity / 1000).toFixed(2)
    : 1;
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-gray-800 group text-white p-6  shadow-lg w-full max-w-4xl h-full transform hover:scale-105 transition duration-300">
      {/* Time/Day AND Suntime */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start h-full">
        {/* Time-Day */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-4xl font-bold">
            {props.weatherdata?.currDateTime.time}
          </p>
          <p className="text-lg text-gray-400">
            {props.weatherdata?.currDateTime.date}
          </p>
        </div>

        {/* Suntime */}
        <div className="flex flex-col gap-3 md:gap-6">
          <SunTimeCard
            Icon={BsFillSunriseFill}
            label="Sunrise"
            time={props.weatherdata?.sunTimes.sunrise}
          />
          <SunTimeCard
            Icon={BsFillSunsetFill}
            label="Sunset"
            time={props.weatherdata?.sunTimes.sunset}
          />
        </div>
      </div>

      {/* Overall Weather Description */}
      <div className="flex justify-center items-center w-full h-full ">
        <div className="flex flex-col gap-4 p-4 justify-center items-center bg-gray-700 rounded-lg shadow-lg w-full max-w-80 ">
          <img
            src={props.weatherdata?.weather.icon}
            alt="weather icon"
            className="w-20 h-20 object-cover bg-white rounded-full"
          />
          <p className="text-xl font-semibold text-centre">
            {props.weatherdata?.weather.main}
          </p>
          <p className="text-xl font-semibold text-centre">
            Current Weather is mainly of type
            {props.weatherdata?.weather.description}
          </p>
        </div>
      </div>

      {/* 4 Weather Events */}
      <div className="flex flex-wrap gap-6 justify-center h-full">
        <WeatherEventCard
          Icon={WiHumidity}
          label="Humidity"
          data={`${props.weatherdata?.humidity}%`}
        />
        <WeatherEventCard
          Icon={PiWind}
          label="Wind Speed"
          data={`${speedInKmHr}%`}
        />
        <WeatherEventCard
          Icon={WiBarometer}
          label="Pressure"
          data={`${props.weatherdata?.pressure}hPa`}
        />
        <WeatherEventCard
          Icon={MdVisibility}
          label="Visibility"
          data={`${visibilityInKm}Km`}
        />
      </div>

      {/* giving gradient and effects */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-800 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
    </div>
  );
};

export default WeatherDisplay;
