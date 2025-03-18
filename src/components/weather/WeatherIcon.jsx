const weatherIcons = {
  sunny: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5" className="text-yellow-400"/>
      <path className="text-yellow-400" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  'cloudy-sun': (
    <div className="relative w-full h-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-3/4 h-3/4" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4" className="text-yellow-400"/>
        <path className="text-yellow-400" d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-2/3 h-2/3" viewBox="0 0 24 24" fill="currentColor">
        <path className="text-gray-400" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      </svg>
    </div>
  ),
  'partly-cloudy-sun': (
    <div className="relative w-full h-full">
      {/* Sun with rays */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-3/4 h-3/4" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4" className="text-yellow-400"/>
        <path className="text-yellow-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>

      {/* Cloud covering part of the sun */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-3/4 h-3/4" viewBox="0 0 24 24" fill="currentColor">
        <path className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.5A4.5 4.5 0 0 1 22 12.5a4.5 4.5 0 0 1-4.5 4.5H5z"/>
      </svg>
    </div>
  ),

  rainy: (
    <div className="relative w-full h-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path className="text-gray-400" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <path className="text-blue-400" d="M16 14l-2 6M12 14l-2 6M8 14l-2 6"/>
      </svg>
    </div>
  ),
  'partly-cloudy': (
    <div className="relative w-full h-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path className="text-gray-400" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      </svg>
    </div>
  ),
  cloudy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path className="text-gray-400" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>

  )
}

function WeatherIcon({ type = 'sunny', className = '', size = 'medium' }) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {weatherIcons[type] || weatherIcons.sunny}
    </div>
  )
}

export default WeatherIcon
