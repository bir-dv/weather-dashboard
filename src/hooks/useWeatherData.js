import { useEffect } from 'react';
import { useWeather } from '../context/WeatherContext.jsx';
import { weatherService } from '../services/weatherService';

export function useWeatherData() {
  const { state, dispatch } = useWeather();

  const fetchWeatherData = async (city) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const [weather, forecast] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      dispatch({ type: 'SET_WEATHER', payload: weather });
      dispatch({ type: 'SET_FORECAST', payload: forecast });
      dispatch({ type: 'SET_CITY', payload: city });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  //this effect runs whenever state.city changes
  useEffect(() => {
    fetchWeatherData(state.city);
  }, [state.city]);

  return {
    ...state,
    fetchWeatherData
  };
} 