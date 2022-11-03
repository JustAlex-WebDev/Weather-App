import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import getFormattedWeatherData from "./services/weatherService";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [query, setQuery] = useState({ q: "paris" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  // const handleBackground = () => {
  //   if (!weather) return "bg-blue-300";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "bg-blue-300";
  //   return "bg-red-300";
  // };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-blue-300">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="">
          {weather && (
            <>
              <Navbar setQuery={setQuery} handleUnits={handleUnits} />
              <MainSection
                setQuery={setQuery}
                weather={weather}
                units={units}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
