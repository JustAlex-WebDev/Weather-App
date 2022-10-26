import React from "react";
import Forecast from "./Forecast";
import Inputs from "./Inputs";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";

const MainSection = () => {
  return (
    <div className="main-div bg-blue-300 mb-24 mt-28">
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
};

export default MainSection;
