import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "paris" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div>
      {weather && (
        <>
          <Navbar />
          <MainSection weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;
