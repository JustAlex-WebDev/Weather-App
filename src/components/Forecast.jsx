import React from "react";

const Forecast = ({ title }) => {
  return (
    <div className="w-[100%] md:w-[80%] m-auto mb-8">
      <div className="flex items-center justify-start mt-6 border-b-[2px] mb-4">
        <p className="text-[#fff] font-semibold uppercase">{title}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-[#fff] text-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
