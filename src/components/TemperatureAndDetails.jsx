import React from "react";
import { TbTemperature } from "react-icons/tb";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";

const TemperatureAndDetails = () => {
  return (
    <div className="pb-6">
      <div className="flex items-center justify-center py-6 text-xl font-semibold text-[#fff]">
        <p>Sunny</p>
      </div>
      <div className="flex flex-col xxsm:flex-row items-center justify-center gap-8 xxsm:gap-16 text-[#fff]">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl font-semibold">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex text-sm items-center justify-center">
            <TbTemperature size={22} className="mr-1" />
            Real feel: <span className="ml-1">32°</span>
          </div>
          <div className="flex text-sm items-center justify-center">
            <MdOutlineWaterDrop size={22} className="mr-1" />
            Humidity: <span className="ml-1">32°</span>
          </div>
          <div className="flex text-sm items-center justify-center">
            <RiWindyFill size={22} className="mr-1" />
            Wind: <span className="ml-1">3 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
