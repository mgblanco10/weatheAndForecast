import config from "../../config";

export const API_KEY = config.API_KEY;
export const DEFAULT_BASE_URL = config.BASE_URL;

const DEFAULT_VERSION = "3.0";

function createRootUrl(version = DEFAULT_VERSION) {
  return `${DEFAULT_BASE_URL}/${version}`;
}

function getBaseUrl(endpoint, version = DEFAULT_VERSION) {
  if (!endpoint) {
    throw new Error(
      "Endpoint no puede estar vacío. Proporcione un endpoint válido."
    );
  }

  const baseUrl = createRootUrl(version);
  return `${baseUrl}/${endpoint}`;
}

function getBaseHeaders() {
  return {
    method: "GET",
  };
}

export { createRootUrl, getBaseUrl, getBaseHeaders };
