/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { kelvinToCelsius } from "../utils/conversion";
import DailyForecastCard from "./DailyForecastCard";

export default function WeatherByCoordinates({ weatherData }) {
  const navigate = useNavigate();
  if (!weatherData || !weatherData.current || !weatherData.daily) {
    return (
      <div className="text-center text-red-500">
        Unable to retrieve weather data for the provided coordinates.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="relative min-w-[300px] w-full max-w-xs p-[3px] rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-green-700 sm:max-w-md md:max-w-lg lg:max-w-2xl sm:block">
        <div className="relative p-6 text-gray-900 bg-white rounded-lg shadow-lg md:p-8 lg:p-10">
          <button
            onClick={() => navigate("/")}
            className="absolute px-3 py-1 text-blue-600 transition-colors duration-200 bg-blue-100 rounded-lg shadow-md top-4 right-4 hover:bg-blue-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Close"
          >
            X
          </button>
          <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl">
            Weather Results
          </h1>
          <div className="mb-4 text-center">
            <p className="text-lg font-semibold">
              Timezone:{" "}
              <span className="text-blue-600">{weatherData.timezone}</span>
            </p>
          </div>
          <div className="mb-6 text-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-lg font-semibold capitalize">
              {weatherData.current.weather[0].description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Temperature:</p>
              <p>{kelvinToCelsius(weatherData.current.temp)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Feels Like:</p>
              <p>{kelvinToCelsius(weatherData.current.feels_like)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Humidity:</p>
              <p>{weatherData.current.humidity}%</p>
            </div>
            <div>
              <p className="font-semibold">Pressure:</p>
              <p>{weatherData.current.pressure} hPa</p>
            </div>
            <div>
              <p className="font-semibold">Wind Speed:</p>
              <p>{weatherData.current.wind_speed} m/s</p>
            </div>
            <div>
              <p className="font-semibold">Visibility:</p>
              <p>{weatherData.current.visibility} m</p>
            </div>
          </div>
          <h3 className="mt-6 text-lg font-semibold">Daily Forecast:</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {weatherData.daily.slice(0, 3).map((day) => (
              <DailyForecastCard
                key={day.dt}
                day={day}
                kelvinToCelsius={kelvinToCelsius}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
