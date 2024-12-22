import api from "./api";
import { WeatherResponse } from "@/types"; // Adjust the path to your `types` file

// Fetch weather data by city name
export const getWeatherByCity = async (
  city: string
): Promise<WeatherResponse | false> => {
  try {
    const response = await api.get<WeatherResponse>(`/weather/${city}`);

    console.log("Weather Data:", response.data);

    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error: any) {
    if (error.response) {
      // Backend returned an error
      console.error("Backend error:", error.response.data.error);
      throw new Error(error.response.data.error); // Using this for showing user-friendly messages
    } else {
      // No response from backend
      console.error("Network error or server down:", error.message);
      throw new Error("Unable to fetch weather data at the moment.");
    }
  }
};
