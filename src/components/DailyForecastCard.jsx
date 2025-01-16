/* eslint-disable react/prop-types */
export default function DailyForecastCard({ day, kelvinToCelsius }) {
  return (
    <div className="p-4 text-gray-800 bg-blue-200 rounded-lg shadow-md">
      <p>
        <span className="font-semibold">Max:</span>{" "}
        {kelvinToCelsius(day.temp.max)}°C
      </p>
      <p>
        <span className="font-semibold">Min:</span>{" "}
        {kelvinToCelsius(day.temp.min)}°C
      </p>
      <p>
        <span className="font-semibold">Summary:</span>{" "}
        {day.weather[0].description}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="Daily Weather Icon"
        className="w-12 h-12 mx-auto mt-2"
      />
    </div>
  );
}
