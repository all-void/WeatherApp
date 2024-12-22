import React from "react";
import {Temperature} from "@/types"

type Props = {
  temperature?:Temperature,
  name:string|undefined
};

const BaseWeather = (props: Props) => {
  const defaultName="Delhi";
  const kelvinToCelsius = (kelvin:number | undefined): string => 
    {
      if(kelvin!==undefined)
      {
        return (kelvin - 273.15).toFixed(2);
      }
      else return "27";
    }
  return (
    <div className="flex flex-col gap-6 justify-center items-center group relative w-full max-w-80 p-6 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl hover:scale-105 transition duration-300 ">

    {/* City Name */}
    <div className="text-lg font-semibold text-white group-hover:text-gray-200 transition duration-300">
      {props.name || defaultName}
    </div>
  
    {/* Original Temperature */}
    <div className="flex flex-col gap-1 items-center">
      <p className="text-3xl font-bold text-gray-300 group-hover:text-white transition duration-300">
        {kelvinToCelsius(props.temperature?.temp)}&deg;C
      </p>
      <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
        Feels like  {kelvinToCelsius(props.temperature?.feels_like)}&deg;C
      </p>
    </div>
  
    {/* Max/Min Temp */}
    <div className="flex flex-row gap-3 justify-between w-full">
      <span className="text-gray-400 group-hover:text-gray-300 transition duration-300">
        Max temp:  {kelvinToCelsius(props.temperature?.temp_max)}&deg;C
      </span>
      <span className="text-gray-400 group-hover:text-gray-300 transition duration-300">
        Min temp:  {kelvinToCelsius(props.temperature?.temp_min)}&deg;C
      </span>
    </div>
  
    {/* card effects - Floating effect */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
  </div>
  
  );
};

export default BaseWeather;
