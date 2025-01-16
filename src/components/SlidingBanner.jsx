export default function SlidingBanner() {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden bg-customBlue">
      <div className="text-sm font-semibold text-white md:text-lg animate-slider whitespace-nowrap">
        <span className="inline-block px-4 py-2 md:px-6">
          🌤 Check your weather now!
        </span>
        <span className="inline-block px-4 py-2 md:px-6">
          🌍 Latitude: -90 to 90
        </span>
        <span className="inline-block px-4 py-2 md:px-6">
          📍 Longitude: -180 to 180
        </span>
        <span className="inline-block px-4 py-2 md:px-6">
          🌦️ Get accurate daily weather forecasts.
        </span>
        <span className="inline-block px-4 py-2 md:px-6">
          💨 Wind speed and direction available!
        </span>
      </div>
    </div>
  );
}
