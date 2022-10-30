import React from "react";
import Inputs from "./Inputs";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";

const MainSection = ({ weather }) => {
  return (
    <div className="main-div bg-blue-300 mb-24 mt-28">
      <Inputs />
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
    </div>
  );
};

export default MainSection;
