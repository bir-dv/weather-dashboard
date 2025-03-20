function OtherCities() {
    const cities = [
      {
        name: 'Addis Ababa',
        temp: '21°C',
        humidity: '72%',
        wind: '2.2 km/hr',
        weather: 'rainy'
      },
      {
        name: 'London',
        temp: '16°C',
        humidity: '80%',
        wind: '2.2 km/hr',
        weather: 'rainy'
      },
      {
        name: 'Chittagong',
        temp: '14°C',
        humidity: '83%',
        wind: '3 km/hr',
        weather: 'rainy'
      }
    ]
  
    return (
      <div>
        <h3 className="text-white text-xl mb-4">Other Cities</h3>
        <div className="space-y-4">
          {cities.map(city => (
            <div key={city.name} className="bg-[#4D4D4D] rounded-2xl p-4 text-white">
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
                  <span>🌧️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default OtherCities