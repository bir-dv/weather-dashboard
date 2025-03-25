import { useWeatherData } from "../../hooks/useWeatherData";
import WeatherIcon from "./WeatherIcon";


function ForecastSection() {

  const {forecast, loading, error} = useWeatherData();

    if (loading) {
      return (
        <div className="bg-cyan-700 rounded-3xl p-6 h-full">
          <h3 className="text-white text-2xl mb-6 pt-10 text-center">Weekly Forecast</h3>
          <div className="animate-pulse space-y-4">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="bg-cyan-800 rounded-xl h-20"></div>
            ))}
          </div>
        </div>
      );
    }
  
  
    if (error) {
      return (
        <div className="bg-cyan-700 rounded-3xl p-6 h-full">
          <h3 className="text-white text-2xl mb-6 pt-10 text-center">Weekly Forecast</h3>
          <div className="text-red-500 text-center p-4 bg-cyan-800 rounded-xl">
            {error}
          </div>
        </div>
      );
    }

    //return null if no forecast data
    if (!forecast || !forecast.list) return null;

    const dailyForecasts = forecast.list.reduce((acc, item) => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString();
      
      if (!acc[dayKey]) {
        acc[dayKey] = {
          day: date.toLocaleDateString('en-US', { weekday: 'long' }),
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          temp: Math.round(item.main.temp),
          weather: item.weather[0].main.toLowerCase()
        };
      }
      return acc;
    }, {});

    // Convert to array and take first 7 days
    const weeklyForecast = Object.values(dailyForecasts).slice(0, 7);
    
    return (
      <div className="bg-cyan-700 rounded-3xl p-6 text-white">
      <h3 className="text-xl mb-6 mt-10 text-center">Weekly Forecast</h3>
      <div className="space-y-4 md:py-5">
        {weeklyForecast.map((day, index) => (
          <div 
            key={index}
            className="flex items-center justify-between bg-cyan-800 rounded-xl p-4 px-8 py-7"
          >
            <div className="flex items-center gap-4">
              <WeatherIcon 
                type={day.weather} 
                size="small"
                className="text-white"
              />
              <div className="text-left">
                <p className="font-medium">{day.day}</p>
                <p className="text-sm text-gray-300">{day.date}</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              {day.temp}°C
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default ForecastSection