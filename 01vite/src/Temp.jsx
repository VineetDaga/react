import React, { useState } from 'react';
import axios from 'axios';

const Temp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'e2d210223cb9126d6d2f78bd70f4d820'; // Get your API key from OpenWeatherMap

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = response.data;
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Weather Forecast App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {weatherData && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Current Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Temp;
