import { WeatherProvider } from './context/WeatherContext.jsx'
import Header from './components/layout/Header'
import MainWeatherCard from './components/weather/MainWeatherCard'
import ForecastSection from './components/weather/ForecastSection'
import OtherCities from './components/weather/OtherCities'
import InfoSection from './components/weather/InfoSection.jsx'

function App() {
  return (
    <WeatherProvider>
    <div>
      <div className="min-h-screen bg-gradient-to-r from-cyan-800 from-10% via-sky-700 via-30% to-emerald-800 to-90% p-4 md:p-6">
        <Header />
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 mt-6">
          <div className="space-y-6 order-1">
            <MainWeatherCard />
            <OtherCities />
          </div>
          
          <div className="order-2 mt-6 md:mt-0">
              <ForecastSection />
          </div>
          <div className='order-3 mt-6 md:mt-0'>
          <InfoSection />
          </div>
            
        </div>
      </div>
    </div>
    </WeatherProvider>
    
  )
}

export default App