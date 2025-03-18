import WeatherIcon from "../weather/WeatherIcon"
function SearchBar() {
  return (
    <div className="relative flex-1 md:max-w-2xl px-auto md:mx-4 w-full">
      <input
        type="text"
        placeholder="Search City"
        className="w-full px-6 py-3 rounded-full bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
      />
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <WeatherIcon type="search" className="pt-2 place-items-center"/>
      </span>
    </div>
  )
}

export default SearchBar
