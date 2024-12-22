import api from "./api.js";
import { API_KEY } from "../config.js";
import { getFormattedSunTimes } from "../utils/formatUnixTime.js";
import { getCurrentTimeAndDate } from "../utils/findCurrDayTime.js";

// Function to get weather data
const getWeather = async (lat, lon) => {
  try {
    // Fetch data from OpenWeather API
    const response = await api.get(`/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });

    // todo:move this into utils
    // Destructure the response data to avoid repetitive code
    const { weather, main, visibility, wind, dt,sys, timezone, name } =
      response.data;

    // Validate if sys and weather data exist
    if (!sys || !weather || !main || timezone==undefined || !wind) {
      throw new Error("Missing essential weather data in response");
    }

    // Extract weather data
    const { main: weatherMain, description, icon } = weather[0];
    const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Extract main temperature data
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;

    // extract wind speed
    const { speed: windspeed } = wind;

    // Format the sunrise and sunset times using the utility function
    const sunTimes = getFormattedSunTimes(sys.sunrise, sys.sunset, timezone);
    const currDateTime= getCurrentTimeAndDate(dt,timezone);

    // Organize and return the weather data
    const weatherData = {
      weather: {
        main: weatherMain,
        description,
        icon: weatherIcon,
      },
      temperature: {
        temp,
        feels_like,
        temp_min,
        temp_max,
      },
      pressure,
      humidity,
      windspeed,
      visibility,
      sunTimes,
      name,
      currDateTime
    };

    return weatherData;
  } catch (error) {
    // Log more details in case of an error (status, response data)
    console.error("Error in weather data service:", error.message);
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    }
    // Rethrow the error to be handled elsewhere
    throw error;
  }
};

export default getWeather;
