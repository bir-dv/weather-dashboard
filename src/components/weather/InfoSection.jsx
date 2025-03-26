import { useState } from "react"

function InfoSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
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

  return (
      <div className="space-y-6">
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