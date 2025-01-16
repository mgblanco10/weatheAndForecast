import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getWeatherByCoordinates,
  getWeatherByCity,
} from "../services/weatherService";
import SlidingBanner from "./SlidingBanner";
import SearchByCoordinates from "./SearchByCoordinates";
import SearchByCity from "./SearchByCity";

export default function WeatherInput() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [searchMode, setSearchMode] = useState("coordinates");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFetchWeather = async () => {
    setLoading(true);
    setError("");

    try {
      let weatherData;

      if (searchMode === "coordinates") {
        if (!latitude || !longitude) {
          throw new Error("Latitude and longitude coordinates are required.");
        }
        weatherData = await getWeatherByCoordinates(latitude, longitude);
      } else if (searchMode === "city") {
        if (!city) {
          throw new Error("City name is required.");
        }
        weatherData = await getWeatherByCity(city);
      }
      navigate("/result", { state: { weatherData, mode: searchMode } });
    } catch (err) {
      setError(err.message || "Unable to retrieve weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <SlidingBanner />
      <div className="relative p-[3px] w-full max-w-xl rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-green-700">
        <div className="relative flex flex-col justify-between w-full p-6 bg-white rounded-lg shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${
                searchMode === "coordinates"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSearchMode("coordinates")}
            >
              Search by Coordinates
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${
                searchMode === "city"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSearchMode("city")}
            >
              Search by City
            </button>
          </div>

          {searchMode === "coordinates" ? (
            <SearchByCoordinates
              latitude={latitude}
              longitude={longitude}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            />
          ) : (
            <div className="min-h-[275px]">
              <SearchByCity city={city} setCity={setCity} />
            </div>
          )}

          <button
            onClick={handleFetchWeather}
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Check Weather"}
          </button>

          <div className="h-6 mt-2">
            {error && <p className="text-center text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
