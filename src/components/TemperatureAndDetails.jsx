import React from "react";
import { TbTemperature } from "react-icons/tb";
import { RiWindyFill } from "react-icons/ri";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const TemperatureAndDetails = ({ weather }) => {
  return (
    <div className="pb-4">
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
      <div className="flex flex-row items-center justify-center gap-8 xsm:gap-2 mt-8 text-sm py-3 text-[#fff] text-center">
        <div className="flex flex-col xsm:flex-row items-center justify-center gap-4 xsm:gap-2">
          <FiSunrise size={22} className="mr-1" />
          <p>
            Rise: <span className="ml-1">06:45 AM</span>
          </p>
          <p className="hidden xsm:block">|</p>

          <AiOutlineArrowUp size={22} className="mr-1" />
          <p>
            High: <span className="ml-1">45°</span>
          </p>
          <p className="hidden xsm:block">|</p>
        </div>
        <div className="flex flex-col xsm:flex-row items-center justify-center gap-4 xsm:gap-2">
          <FiSunset size={22} className="mr-1" />
          <p>
            Set: <span className="ml-1">07:35 PM</span>
          </p>
          <p className="hidden xsm:block">|</p>

          <AiOutlineArrowDown size={22} className="mr-1" />
          <p>
            Low: <span className="ml-1">40°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
