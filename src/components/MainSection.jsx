import React from "react";
import Inputs from "./Inputs";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";

const MainSection = () => {
  return (
    <div className="main-div bg-blue-300 mb-24 mt-28">
      <Inputs />
      <TemperatureAndDetails />
      <TimeAndLocation />
    </div>
  );
};

export default MainSection;
