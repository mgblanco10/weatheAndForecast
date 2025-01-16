import { useNavigate, useLocation } from "react-router-dom";
import WeatherByCoordinates from "./WeatherByCoordinates";
import WeatherByCity from "./WeatherByCity";

export default function WeatherResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { weatherData, mode } = location.state || {};

  if (!weatherData || !mode) {
    navigate("/");
    return null;
  }

  return (
    <div>
      {mode === "coordinates" ? (
        <WeatherByCoordinates weatherData={weatherData} />
      ) : (
        <WeatherByCity weatherData={weatherData} />
      )}
    </div>
  );
}
