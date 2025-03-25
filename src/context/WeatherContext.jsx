import { createContext, useContext, useReducer } from 'react';

const WeatherContext = createContext(); //this is to creat the context

const initialState = {
  currentWeather: null,
  forecast: null,
  loading: false,
  error: null,
  city: 'Addis Ababa' // default city
};


// to handle state updates
function weatherReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: null };
    case 'SET_WEATHER':
      return {
        ...state,
        currentWeather: action.payload,
        loading: false,
        error: null
      };
    case 'SET_FORECAST':
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        error: null
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case 'SET_CITY':
      return { ...state, city: action.payload };
    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
        {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};