import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  const [city, setCity] = useState(''); // Default city is set to "Delhi"
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city) {
      setLoading(true);
      setError('');
      setWeatherData(null);

      const API_KEY = '2287848e3fd31fe0a9c59429097ffbc6';
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      axios
        .get(API_URL)
        .then(response => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError('An error occurred while fetching weather data.');
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
