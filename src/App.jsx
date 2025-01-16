import { useState } from "react";
import WeatherInput from "./WeatherInput";
import WeatherResult from "./WeatherResult";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const resetWeatherData = () => {
    setWeatherData(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-blue-500 to-indigo-600 font-creato-medium">
      {weatherData ? (
        <WeatherResult weatherData={weatherData} onClose={resetWeatherData} />
      ) : (
        <WeatherInput setWeatherData={setWeatherData} />
      )}
    </div>
  );
}
