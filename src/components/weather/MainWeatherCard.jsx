import { useWeatherData } from "../../hooks/useWeatherData";
import WeatherIcon from "./WeatherIcon";


function MainWeatherCard() {

  const { currentWeather: weatherData, loading, error } = useWeatherData();

    // Helper function to determine weather icon type based on conditions
    const getWeatherIcon = (weatherMain, temp) => {
      // Convert weather condition to lowercase for consistent comparison
      const condition = weatherMain.toLowerCase();
      
      // Map OpenWeather conditions to your icon types
      const weatherMap = {
        'clear': 'sunny',
        'clouds': 'cloudy',
        'rain': 'rainy',
        'drizzle': 'rainy',
        'thunderstorm': 'thunder',
        'snow': 'snowy',
        'mist': 'partly-cloudy',
        'fog': 'partly-cloudy',
        'haze': 'partly-cloudy'
      };
  
      return weatherMap[condition] || 'sunny'; // Default to sunny if condition not found
    };

    //this show loading state
    if (loading) {
      return (
        <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
          <div className="flex items-center justify-center h-full">
            <p>Loading weather data...</p>
          </div>
        </div>
      );
    }

    //show error state
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

    const iconType = getWeatherIcon(weatherMain, temp);


    return (
      <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
        <div className="flex flex-col items-center text-center py-4">
          <div className="mb-4">
            <WeatherIcon 
              type={iconType} 
              size="large" 
              className="text-white"
            />
          </div>
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