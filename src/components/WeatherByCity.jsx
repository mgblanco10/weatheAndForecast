/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function WeatherByCity({ weatherData }) {
  const navigate = useNavigate();

  if (!weatherData || !weatherData.sys || !weatherData.weather) {
    return (
      <div className="text-center text-red-500">
        Unable to retrieve weather data for the provided city.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="relative min-w-[280px] w-full max-w-sm p-[3px] rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-green-700 sm:max-w-sm md:max-w-md">
        <div className="relative p-6 text-gray-900 bg-white rounded-lg shadow-lg md:p-8 lg:p-12">
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
              City:{" "}
              <span className="text-blue-600">{weatherData.name || "N/A"}</span>
            </p>
            <p className="text-lg font-semibold">
              Country:{" "}
              <span className="text-blue-600">
                {weatherData.sys.country || "N/A"}
              </span>
            </p>
          </div>
          <div className="mb-6 text-center">
            <img
              src={`http://openweathermap.org/img/wn/${
                weatherData.weather[0]?.icon || "01n"
              }@2x.png`}
              alt="Weather Icon"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-lg font-semibold capitalize">
              {weatherData.weather[0]?.description ||
                "No description available"}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">Temp:</p>
              <p>{weatherData.main.temp.toFixed(1)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Feels Like:</p>
              <p>{weatherData.main.feels_like.toFixed(1)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Min Temp:</p>
              <p>{weatherData.main.temp_min.toFixed(1)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Max Temp:</p>
              <p>{weatherData.main.temp_max.toFixed(1)}°C</p>
            </div>
            <div>
              <p className="font-semibold">Humidity:</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div>
              <p className="font-semibold">Pressure:</p>
              <p>{weatherData.main.pressure} hPa</p>
            </div>
            <div>
              <p className="font-semibold">Wind Speed:</p>
              <p>{weatherData.wind.speed.toFixed(1)} m/s</p>
            </div>
            <div>
              <p className="font-semibold">Wind Gust:</p>
              <p>{weatherData.wind.gust?.toFixed(1) || "N/A"} m/s</p>
            </div>
            <div>
              <p className="font-semibold">Cloudiness:</p>
              <p>{weatherData.clouds.all}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
