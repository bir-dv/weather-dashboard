// import { WeatherProvider } from './context/WeatherContext'
import Header from './components/layout/Header'
import MainWeatherCard from './components/weather/MainWeatherCard'
import ForecastSection from './components/weather/ForecastSection'
import InfoSection from './components/weather/InfoSection'
import OtherCities from './components/weather/OtherCities'

function App() {
  return (
    // <WeatherProvider>
    // </WeatherProvider>

    <div>
      <div className="min-h-screen bg-black p-4 md:p-6">
        <Header />
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 mt-6">
          {/* Left Column */}
          <div className="space-y-6 order-1">
            <MainWeatherCard />
            <OtherCities />
          </div>
          

        </div>
      </div>
    </div>
    
  )
}

export default App