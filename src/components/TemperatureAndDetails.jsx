import React from "react";
import { TbTemperature } from "react-icons/tb";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-blue-500">
        <p>Rain</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-16 text-[#fff] py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <TbTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <MdOutlineWaterDrop size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">43%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <RiWindyFill size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">3 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
