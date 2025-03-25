import { weatherService } from "../../services/weatherService"
import { useState, useEffect } from "react"
import { worldCities } from "../../data/worldCities";


function OtherCities() {
    const [citiesData, setCitiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getRandomCities = () => {
      let cities = [];
      const continents = Object.keys(worldCities);
  
      while (cities.length < 3) {
        const continent = continents[Math.floor(Math.random() * continents.length)];
        
        if (Array.isArray(worldCities[continent])) {
          // For Oceania
          const cityList = worldCities[continent];
          const city = cityList[Math.floor(Math.random() * cityList.length)];
          if (!cities.includes(city)) {
            cities.push(city);
          }
        } else {
          // For other continents
          const regions = Object.keys(worldCities[continent]);
          const region = regions[Math.floor(Math.random() * regions.length)];
          const cityList = worldCities[continent][region];
          const city = cityList[Math.floor(Math.random() * cityList.length)];
          if (!cities.includes(city)) {
            cities.push(city);
          }
        }
      }
      return cities;
    };

    const fetchCitiesData = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const selectedCities = getRandomCities();
        console.log('Selected cities:', selectedCities);
  
        const weatherPromises = selectedCities.map(city => 
          weatherService.getCurrentWeather(city)
        );
  
        const weatherData = await Promise.all(weatherPromises);
        console.log('Raw weather data:', weatherData);
  
        const formattedData = weatherData.map(data => ({
          name: data.name,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          weather: data.weather[0].main.toLowerCase()
        }));
  
        console.log('Formatted data:', formattedData);
        setCitiesData(formattedData);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setError('Failed to load cities data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchCitiesData();
      // Set up interval for updates city every 5 minutes
      const interval = setInterval(fetchCitiesData, 200000);
      return () => clearInterval(interval); // to Cleanup interval on unmount

    }, []);

    if (loading) {
      return (
        <div className="text-white">
          <h3 className="text-xl mb-4">Other Cities</h3>
          <div className="space-y-4">
            <div className="bg-cyan-700 rounded-2xl p-4">
              <p>Loading cities data...</p>
            </div>
          </div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-white">
          <h3 className="text-xl mb-4">Other Cities</h3>
          <div className="space-y-4">
            <div className="bg-[#4D4D4D] rounded-2xl p-4 text-red-500">
              {error}
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div>
        <h3 className="text-white text-xl mb-4">Other Cities</h3>
        <div className="space-y-4">
          {citiesData.map(city => (
            <div key={city.name} className="bg-gradient-to-r from-indigo-500 via-cyan-600 to-blue-500 rounded-2xl p-4 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">{city.name}</h4>
                  <div className="text-sm text-white py-4">
                    <div>Hum | {city.humidity}</div>
                    <div>Wind | {city.wind}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 pr-4">
                  <span className="text-2xl">{city.temp}</span>
                  <span>
                  {city.weather === 'clear' ? '☀️' : 
                   city.weather === 'rain' ? '🌧️' : 
                   city.weather === 'clouds' ? '☁️' : '🌥️'}
                </span>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default OtherCities