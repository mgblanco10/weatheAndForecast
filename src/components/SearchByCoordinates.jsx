/* eslint-disable react/prop-types */
import InfoIconWithModal from "./InfoIconWithModal";
import { isValidCoordinate } from "../utils/validation";

export default function SearchByCoordinates({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
}) {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl">
        Search by Coordinates
      </h1>
      <div className="relative mb-6">
        <label className="block mb-2 text-sm font-medium md:text-lg">
          Latitude:
        </label>
        <div className="flex items-center">
          <input
            type="text"
            value={latitude}
            onChange={(e) => {
              const value = e.target.value;
              if (isValidCoordinate(value)) {
                setLatitude(value);
              }
            }}
            placeholder="Please enter latitude"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 md:px-4 md:py-3"
          />
          <InfoIconWithModal
            title="Latitude Information"
            content="Latitude ranges from -90 to 90. Positive values are north of the equator, while negative values are south."
          />
        </div>
      </div>
      <div className="relative mb-6">
        <label className="block mb-2 text-sm font-medium md:text-lg">
          Longitude:
        </label>
        <div className="flex items-center">
          <input
            type="text"
            value={longitude}
            onChange={(e) => {
              const value = e.target.value;
              if (isValidCoordinate(value)) {
                setLongitude(value);
              }
            }}
            placeholder="Please enter longitude"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 md:px-4 md:py-3"
          />
          <InfoIconWithModal
            title="Longitude Information"
            content="Longitude ranges from -180 to 180. Positive values are east of the prime meridian, while negative values are west."
          />
        </div>
      </div>
    </>
  );
}
