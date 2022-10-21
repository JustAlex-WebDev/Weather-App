import React, { useState } from "react";
import { cities } from "../data";

const TopButtons = () => {
  const [fetchedCities] = useState(cities);

  return (
    <div className="flex items-center justify-around my-6">
      {fetchedCities.map((fetchedCity) => (
        <button
          key={fetchedCity.id}
          className="text-[#fff] opacity-80 text-lg md:text-xl font-semibold transition ease-in-out hover:scale-105 hover:opacity-100 text-center"
        >
          {fetchedCity.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
