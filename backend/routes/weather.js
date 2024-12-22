import express from "express";
import getLatLon from "../services/geocodingService.js";
import getWeather from "../services/weatherDataService.js";

const router = express.Router();

// Helper function for error handling
const handleError = (res, error) => {
  console.error("Error:", error.message);
  // Check if error message is related to geocoding or weather
  if (error.message.includes("city")) {
    return res.status(404).json({ error: "City not found or invalid." });
  }
  if (error.message.includes("weather")) {
    return res.status(500).json({ error: "Unable to fetch weather data." });
  }
  // Generic server error
  res.status(500).json({ error: "Internal server error." });
};

// Route to get weather data by city
router.get("/:city", async (req, res) => {
  const city = req.params.city;

  try {
    // Get latitude and longitude
    const { lat, lon, name } = await getLatLon(city);

    if (!lat || !lon) {
      return res.status(404).json({ error: "Invalid city name or coordinates not found." });
    }

    // Get weather data
    const weatherData = await getWeather(lat, lon);

    // Validate weather data
    if (!weatherData) {
      return res.status(500).json({ error: "Weather data not available." });
    }

    // Send meaningful response
    res.json(weatherData);
  } catch (error) {
    handleError(res, error);
  }
});

export default router;

