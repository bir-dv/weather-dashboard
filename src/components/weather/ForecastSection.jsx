function ForecastSection() {
    const forecast = [
      { day: 'Sunday', temp: '21°C', weather: 'rainy' },
      { day: 'Monday', temp: '28°C', weather: 'sunny' },
      { day: 'Tuesday', temp: '16°C', weather: 'rainy' },
      { day: 'Wednesday', temp: '19°C', weather: 'partly-cloudy' },
      { day: 'Thursday', temp: '21°C', weather: 'rainy' },
      { day: 'Friday', temp: '31°C', weather: 'sunny' },
      { day: 'Saturday', temp: '17°C', weather: 'rainy' }
    ]
  
    return (
      <div className="bg-[#4D4D4D] rounded-3xl p-6 h-full">
        <h3 className="text-white text-2xl mb-6 pt-10 text-center">Weekly Forecast</h3>
        <div className="space-y-4 md:py-4">
          {forecast.map(day => (
            <div key={day.day} className="bg-[#656363] rounded-xl p-4 flex justify-between items-center text-white py-8 px-6">
              <span>{day.day}</span>
              <div className="flex items-center gap-4">
                <span>{day.temp}</span>
                <span>{day.weather === 'sunny' ? '☀️' : '🌧️'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default ForecastSection