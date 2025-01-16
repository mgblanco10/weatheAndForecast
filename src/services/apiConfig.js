const API_KEY = "af4a0b08b7ade829d03c5815b4d4fadf";
const DEFAULT_BASE_URL = "https://api.openweathermap.org/data";
const DEFAULT_VERSION = "3.0";

let rootUrl;

function createRootUrl(version = DEFAULT_VERSION) {
  if (!rootUrl) {
    rootUrl = `${DEFAULT_BASE_URL}/${version}`;
  }
  return rootUrl;
}

function getBaseUrl(endpoint, version = DEFAULT_VERSION) {
  if (!endpoint) {
    throw new Error(
      "Endpoint no puede estar vacío. Proporcione un endpoint válido."
    );
  }

  const baseUrl = `${DEFAULT_BASE_URL}/${version}`;
  return `${baseUrl}/${endpoint}`;
}

function getBaseHeaders() {
  return {
    method: "GET",
  };
}

export { createRootUrl, getBaseUrl, getBaseHeaders, API_KEY };
