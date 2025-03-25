import { useEffect, useState } from "react";
import { weatherService } from "../../services/weatherService";

function MainWeatherCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchWeather = async ()=>{
      try {
        setLoading(true);
        const data = await weatherService.getCurrentWeather('Addis Ababa');
        console.log('Fetched Weather Data:', data); // Debug log
        setWeatherData(data);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  },[]);
    console.log('Component State:', { weatherData, loading, error });

    if (loading) {
      return (
        <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
          <div className="flex items-center justify-center h-full">
            <p>Loading weather data...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
          <div className="flex items-center justify-center h-full">
            <p className="text-red-500">Error: {error}</p>
          </div>
        </div>
      );
    }

    if (!weatherData) return null;

    const {
      main: { temp, humidity },
      wind: { speed },
      name,
      weather: [{ main: weatherMain }]
    } = weatherData;



    return (
      <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
        <div className="flex flex-col items-center text-center py-4">
          <div className="text-yellow-400 text-4xl md:text-6xl mb-2 md:mb-4">☀️</div>
          <div className="text-5xl md:text-6xl font-bold md:mb-1 mb-2">{Math.round(temp)}°C</div>
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6" > {name} </h2>
          
          <div className="flex flex-row md:flex-row justify-between w-full text-gray-300 pt-4 px-auto md:px-12 gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">💧</span>
              <div>
                <div className="text-lg md:text-xl">{humidity}%</div>
                <div className="text-sm">Humidity</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">💨</span>
              <div>
                <div className="text-lg md:text-xl">{speed} km/hr</div>
                <div className="text-sm">Wind Speed</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
  
  export default MainWeatherCard