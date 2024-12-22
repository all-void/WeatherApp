"use client";
import Navbar from "@/components/Navbar";
import WeatherDisplay from "@/components/WeatherDisplay";
import { WeatherResponse } from "@/types";
import { useEffect, useState } from "react";
import { getWeatherByCity } from "@/services/weatherServices"; // Import your weather API function
import BaseWeather from "@/components/BaseWeather";
import SkeletonLoader from "@/components/shared/SkeletonLoader";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>("Delhi");


  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Clear previous errors

      try {
        const data = await getWeatherByCity(city);
        if (data) {
          setWeatherData(data);
        } // Set the weather data
      } catch (err: any) {
        setError(
          err.message ||
          "Something went wrong. Please ensure stable network connection or try again later."
        );
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchWeather(); // Fetch data on component mount
  }, [city]);

  // Function to handle search input and city change
  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <>
      <Navbar currentCity={city} onCityChange={handleCityChange} />
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 w-full justify-between">
        {isLoading ? (
          <div className="text-center mx-auto my-auto">
            <SkeletonLoader />
          </div>
        ) : error ? (
          <div className="text-center mt-10 text-white text-2xl mx-auto">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {/* see types.ts for Temperature an */}
            <BaseWeather
              temperature={weatherData?.temperature}
              name={weatherData?.name}
            />
            <WeatherDisplay weatherdata={weatherData} />
          </>
        )}
      </div>
    </>
  );
}
