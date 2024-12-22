

import React from "react";
import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {
  currentCity: string;
  onCityChange: (city: string) => void;
};

const Navbar = (props: Props) => {
  return (
    <nav className="shadow-lg sticky top-0 left-0 z-30 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md w-full mt-6 mb-14 h-full">
      <div className="w-full flex justify-between items-center px-6 flex-col md:flex-row p-4 ">
        {/* Logo & Name */}
        <div className="flex items-center justify-center gap-2 text-white">
          <h2 className="text-4xl font-semibold">Weather</h2>
          <MdWbSunny className="text-4xl text-yellow-300 animate-pulse" />
        </div>

          <SearchBox currentCity={props.currentCity} onCityChange={props.onCityChange} />
      </div>
    </nav>
  );
};

export default Navbar;
