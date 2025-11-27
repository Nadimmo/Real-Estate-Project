import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "2f70ccd2e75be6aeae7c933657c01963";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Default city to load weather on mount
  const DEFAULT_CITY = 'Dhaka'; 

  // Function to fetch weather data from OpenWeatherMap
  const fetchWeather = useCallback(async (location) => {
    if (!location) return;

    setIsLoading(true);
    setError('');
    setWeather(null); // Clear previous data

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: location,
          units: 'metric', // Celsius
          appid: API_KEY,
        },
      });

      setWeather(response.data);
      setCity(''); // Clear input after successful search

    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError(`Location "${location}" not found.`);
      } else if (err.response && err.response.status === 401) {
        setError('Authorization failed. Please check your API key.');
      } else {
        setError('An error occurred while fetching weather data.');
      }
      console.error("API Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []); 

  // Load default weather on component mount
  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]); 

  // Handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city.trim());
  };

  return (
    <div className="weather-search-container 
          max-w-md mx-auto mt-20 p-6 bg-white 
          shadow-xl rounded-xl border border-black min-h-screen ">

      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Current Weather by Location 🔎
        </h2>

      {/* 1. Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city name (e.g., Paris)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={isLoading}
          className="flex-grow p-3 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
        <button 
            type="submit" 
            disabled={!city.trim() || isLoading}
            className="px-5 py-3 bg-blue-600 text-white font-semibold 
                       rounded-lg hover:bg-blue-700 transition duration-150 
                       disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* 2. Loading and Error Feedback */}
      {isLoading && (
            <p className="text-center text-blue-500 mt-4">
                <span className="animate-pulse">Fetching data...</span>
            </p>
        )}
      {error && (
            <p className="text-center text-red-600 font-medium mt-4 p-2 bg-red-100 rounded">
                ❌ {error}
            </p>
        )}
      
      {/* 3. Weather Display */}
      {weather && !isLoading && (
        <div className="weather-results p-4 mt-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-center mb-4 text-gray-700">
                {weather.name}, {weather.sys.country}
            </h3>
          <div className="temperature text-7xl font-light text-center text-blue-800 my-4">
            {Math.round(weather.main.temp)}°C
          </div>
          <p className="condition text-xl text-center text-gray-600 font-medium mb-4">
            {weather.weather[0].description.toUpperCase()} 
          </p>
          <div className="details grid grid-cols-2 gap-4 text-sm mt-4 p-3 bg-white rounded-md">
            <p className="text-gray-600">💧 Humidity: **{weather.main.humidity}%**</p>
            <p className="text-gray-600">💨 Wind Speed: **{weather.wind.speed} m/s**</p>
          </div>
        </div>
      )}

      {/* Initial message when nothing is displayed yet */}
      {!weather && !isLoading && !error && (
        <p className="text-center text-gray-500 mt-6">
            Ready to find the weather! Start by entering a city name above.
        </p>
      )}

    </div>
  );
};

export default WeatherSearch;