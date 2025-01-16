import { getBaseUrl, getBaseHeaders, API_KEY } from "./apiConfig";

export async function getWeatherByCoordinates(lat, lon) {
  if (!lat || !lon) {
    throw new Error("Latitude and longitude coordinates are required.");
  }

  const url = getBaseUrl(
    `onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    "3.0"
  );

  try {
    const response = await fetch(url, getBaseHeaders());
    if (!response.ok) {
      if (response.status >= 400 && response.status < 500) {
        throw new Error("Invalid coordinates or data not found.");
      } else {
        throw new Error("Error retrieving weather data from the server.");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error calling OpenWeatherMap API:", error);
    throw error;
  }
}

export async function getWeatherByCity(city) {
  if (!city || city.trim() === "") {
    throw new Error("City name is required.");
  }

  const url = getBaseUrl(
    `weather?q=${city.trim()}&appid=${API_KEY}&units=metric`,
    "2.5"
  );

  try {
    const response = await fetch(url, getBaseHeaders());
    if (!response.ok) {
      throw new Error("Failed to fetch weather data for the city.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error calling OpenWeatherMap API:", error);
    throw error;
  }
}
