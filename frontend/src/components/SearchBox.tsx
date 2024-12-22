
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  currentCity: string;
  onCityChange: (city: string) => void;
};

export default function SearchBox(props: Props) {

  const [inputCity, setInputCity] = useState(props.currentCity);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value);
  };
  const handleSearchClick = () => {
    if (inputCity.trim()) {
      props.onCityChange(inputCity); // Update city in parent component
    }
  };
  return (
    <div className="flex flex-row relative items-center justify-center h-10 mt-4 md:mt-0 w-">
      {/* input city */}
      <form className="h-full w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search City..."
          value={inputCity}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none focus:border-blue-600 h-full bg-gray-800 text-white placeholder-gray-400 transition duration-300 group hover:bg-gray-700"
        />
      </form>
      {/* search button */}
      <button onClick={handleSearchClick} className="px-4 py-1 border-blue-500 bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full transition duration-300">
        <IoSearch className="text-xl" />
      </button>
      
    </div>
  );
}
