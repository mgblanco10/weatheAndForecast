/* eslint-disable react/prop-types */
export default function SearchByCity({ city, setCity, error }) {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold text-center md:text-3xl">
        Search by City
      </h1>
      <div className="relative mt-16 mb-6">
        <label className="block mb-2 text-sm font-medium md:text-lg">
          City Name:
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Please enter city name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 md:px-4 md:py-3"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </>
  );
}
