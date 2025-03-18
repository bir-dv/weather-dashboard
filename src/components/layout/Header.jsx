import SearchBar from '../ui/SearchBar'
import { useState, useEffect } from 'react'
import headerIcon from "/src/assets/icons/weather-icons/header-icon.png"

function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center">
      <div className="flex items-start gap-4">
        <img src={headerIcon} alt="logo" className="w-28 h-28 hidden md:block animate-pulse" />
        <div className="text-white md:pt-6">
          <span className="text-4xl font-bold">{dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          <p className="text-gray-400">{dateTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

export default Header 