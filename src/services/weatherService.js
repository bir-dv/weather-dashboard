const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL

export const weatherService = {
    getCurrentWeather: async (city) =>{
        try {
            const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
            
            if (!response.ok) throw new Error('City not found');

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getForecast: async (city) => {
        try {
          const response = await fetch(
            `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
          );
          if (!response.ok) throw new Error('Forecast not found');
          return await response.json();
        } catch (error) {
          throw new Error(error.message);
        }
      }
};