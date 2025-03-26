import { useState } from "react"
import { useWeatherData } from "../../hooks/useWeatherData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

//this is to register chartjs components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
)

function InfoSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const {forecast} = useWeatherData();

  const quotes = [
    "We do not inherit the Earth from our ancestors; we borrow it from our children.",
    "Everybody talks about the weather, but nobody does anything about it.",
    "Destroying rainforests for economic gain is like burning a Renaissance painting to cook a meal.",
    "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    "Look deep into nature, and then you will understand everything better."
  ];

  //add the navigation function
  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length); // the % quotes.length (module operation ensure we loop back to the beginning when we reach the end and vice versa)
  };
  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  // Process forecast data for the chart
  const chartData = forecast?.list?.reduce((acc, item) => { //reduce transform the array into an object
    const date = new Date(item.dt * 1000);
    const dayKey = date.toLocaleDateString();
    
    if (!acc[dayKey]) {
      acc[dayKey] = {
        temp: Math.round(item.main.temp),
        date: date.toLocaleDateString('en-US', { weekday: 'short' })
      };
    }
    return acc;
  }, {});

  const temperatures = chartData ? Object.values(chartData).slice(0, 7) : [];

  // this one is for  Chart.js configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1e40af',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `Temperature: ${context.raw}°C`
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
          callback: (value) => `${value}°C`
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  const data = {
    labels: temperatures.map(day => day.date),
    datasets: [
      {
        data: temperatures.map(day => day.temp),
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      }
    ]
  };

  return (
      <div className="space-y-6">
        {temperatures.length > 0 && (
          <div className="bg-cyan-700 rounded-3xl p-8 text-white">
            <h3 className="text-xl mb-8">Weekly Temperature Forecast</h3>
            <div className="h-[300px]">
              <Line options={chartOptions} data={data} />
            </div>
          </div>
          )
        }
        
        {/* Quotes Carousel */}
        <div className="bg-cyan-700 rounded-3xl py-28 px-8 text-white">
          <div className="relative">

            <button 
            onClick={prevQuote}
            className="absolute left-0 top-1/2 -translate-y-1/2 hover:scale-140 transition-transform">
            ←
            </button>

            <div className="text-center px-12">
              <p className="text-lg">{quotes[currentQuoteIndex]}</p>
            </div>

            <button 
            onClick={nextQuote}
            className="absolute right-0 top-1/2 -translate-y-1/2 hover:scale-140 transition-transform">
            →
            </button>

          </div>

          <div className="flex justify-center gap-2 mt-12">
              {quotes.map((_, i) => (
                  <div 
                      key={i} 
                      className={`h-2 w-2 rounded-full ${i === currentQuoteIndex ? 'bg-white' : 'border border-white'}`} 
                  />
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default InfoSection