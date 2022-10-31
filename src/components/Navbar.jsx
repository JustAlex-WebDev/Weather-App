import React, { useState } from "react";
import { cities } from "../data";
import { FaUmbrella } from "react-icons/fa";

const Navbar = ({ setQuery, handleUnits, handleBackground }) => {
  const [fetchedCities] = useState(cities);

  return (
    <div className="w-full shadow-md fixed top-0 z-50 bg-blue-300">
      <div className="main-div flex items-center justify-between h-20 font-bold text-[#fff]">
        <div className="cursor-pointer">
          <h1 className="text-lg hover:opacity-50 flex justify-center">
            <span>
              <FaUmbrella size={22} />
            </span>
            utsider
          </h1>
        </div>
        <div className="hidden xsm:flex gap-4 lg:gap-8">
          {fetchedCities.map((fetchedCity) => (
            <button
              key={fetchedCity.id}
              onClick={() => setQuery({ q: fetchedCity.title })}
              className="hover:opacity-50 transition hover:scale-105 ease-in-out text-base lg:text-lg"
            >
              {fetchedCity.title}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            name="metric"
            onClick={handleUnits}
            className="hover:opacity-50"
          >
            °C
          </button>
          <span className="text-sm">/</span>
          <button
            name="imperial"
            onClick={handleUnits}
            className="hover:opacity-50"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
