import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Inputs = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 items-center text-center md:text-right">
      <h1 className="text-2xl font-bold my-2 text-[#fff]">Search A City</h1>
      <form onSubmit={handleSubmit} className="relative mr-8">
        <AiOutlineSearch className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-[0.6rem] ml-4 text-primary" />
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none capitalize"
          type="text"
          placeholder="Search"
        />
        <HiOutlineLocationMarker
          size={22}
          title="Use My Location"
          onClick={handleLocation}
          className="text-[#fff] absolute top-0 -right-8 mt-2 ml-4 cursor-pointer rounded-2xl hover:opacity-50"
        />
      </form>
    </div>
  );
};

export default Inputs;
