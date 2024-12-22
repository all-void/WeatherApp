
import api from "./api.js";
import { API_KEY } from "../config.js";

// Helper function to handle API response validation
const isValidResponse = (data) => {
  return data && Array.isArray(data) && data.length > 0;
};

const getLatLon = async (city) => {
  try {
    // Send request to the geocoding API
    const response = await api.get(`/geo/1.0/direct`, {
      params: {
        q: city,
        limit: 1,
        appid: API_KEY,
      },
    });

    // Check if the response is successful
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}. Please check API key or try again.`);
    }

    // Check if valid data is returned
    if (!isValidResponse(response.data)) {
      throw new Error("Please Enter Valid City.");
    }

    // Destructure required fields from the response
    const { name, lat, lon } = response.data[0];

    // Return extracted data
    return { name, lat, lon };

  } catch (error) {
    // Log detailed error information
    console.error("Error in geocoding service:", error.message);

    // Optionally, log more details for debugging (e.g., status code, response data)
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    }

    // Rethrow the error after logging it
    throw error;
  }
};

export default getLatLon;

