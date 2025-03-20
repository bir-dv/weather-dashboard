function MainWeatherCard() {
    return (
      <div className="border border-white rounded-3xl p-4 md:p-8 text-white mx-auto">
        <div className="flex flex-col items-center text-center py-4">
          <div className="text-yellow-400 text-4xl md:text-6xl mb-2 md:mb-4">☀️</div>
          <div className="text-5xl md:text-6xl font-bold md:mb-1 mb-2">25°C</div>
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6" >New York</h2>
          
          <div className="flex flex-row md:flex-row justify-between w-full text-gray-300 pt-4 px-auto md:px-12 gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">💧</span>
              <div>
                <div className="text-lg md:text-xl">62%</div>
                <div className="text-sm">Humidity</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg md:text-2xl">💨</span>
              <div>
                <div className="text-lg md:text-xl">5.1 km/hr</div>
                <div className="text-sm">Wind Speed</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
  
  export default MainWeatherCard