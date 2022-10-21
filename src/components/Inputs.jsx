import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6 mx-8 sm:mx-16 gap-4">
      <div className="flex flex-row w-3/4 items-center justify-start gap-2">
        <form className="relative">
          <AiOutlineSearch className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-2 ml-4 text-[#161616]" />
          <input
            className="bg-[#fff] w-full text-[#161616] pl-12 py-2 rounded-2xl shadow-lg outline-none font-light capitalize"
            type="text"
            placeholder="Search"
          />
        </form>
        <HiOutlineLocationMarker
          size={22}
          className="text-[#fff] min-w-[1.5rem] cursor-pointer rounded-2xl text-xl transition ease-in-out hover:scale-110 opacity-90 hover:opacity-100"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-end gap-2">
        <button
          name="metric"
          className="text-base sm:text-lg text-[#fff] opacity-80 hover:opacity-100 font-semibold transition ease-in-out hover:scale-110"
        >
          °C
        </button>
        <span className="text-xl text-[#fff] opacity-70">/</span>
        <button
          name="imperial"
          className="text-base sm:text-lg text-[#fff] opacity-80 hover:opacity-100 font-semibold transition ease-in-out hover:scale-110"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
