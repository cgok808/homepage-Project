import React, { useState, useEffect } from "react";
import { GlassCard } from "./GlassCard"; // adjust path if needed

const WeatherDisplay = ({ location = "auto:ip" }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=84bc7a5bd1f24dfd924130528250908&q=${location}&days=1`
        );
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) return <GlassCard>Loading weather...</GlassCard>;
  if (error) return <GlassCard>Error: {error}</GlassCard>;

  const current = weather.current;
  const forecast = weather.forecast.forecastday[0].day;

  return (
    <GlassCard className='text-black/70 max-w-xs'>
      <div className='text-center mb-4'>
        <h3 className='text-lg font-semibold mb-2'>{weather.location.name}</h3>
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          className='inline-block mx-auto'
        />
        <p className='text-3xl font-bold'>{current.temp_f}°F</p>
        <p className='text-sm mb-2'>Feels like {current.feelslike_f}°F</p>
      </div>

      <div className='text-center space-y-1'>
        <div>
          <strong>High:</strong> {forecast.maxtemp_f}°F
        </div>
        <div>
          <strong>Low:</strong> {forecast.mintemp_f}°F
        </div>
      </div>
    </GlassCard>
  );
};

export default WeatherDisplay;
