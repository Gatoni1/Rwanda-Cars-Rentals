import React, { useState, useEffect } from 'react'
import featuredCars from '@/data/featured-cars.json'
import { Card, Button } from './ui'
import { useNavigate } from 'react-router-dom'

export default function FeaturedCarCarousel() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Auto-rotate cars every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCars.length)
        setTimeout(() => {
          setIsAnimating(false)
        }, 300)
      }, 300)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  const car = featuredCars[currentIndex]
  
  const handleManualChange = (index: number) => {
    if (index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }, 300)
  }
  
  return (
    <div className="relative">
      <Card className="p-6 shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Featured
          </span>
        </div>
        
        <div className={`w-full h-72 bg-gradient-to-br from-white to-[var(--accent)] rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <img
            src={encodeURI(car.image)}
            alt={car.name}
            loading="lazy"
            className="w-full h-full object-contain md:object-cover rounded-xl transform transition-transform hover:scale-105 duration-700"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.style.display = 'none'
              console.error(`Failed to load image for ${car.name}`)
            }}
          />
        </div>
        
        <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <h3 className="mt-4 font-semibold text-[var(--secondary)] text-xl">{car.name}</h3>
          <div className="flex items-center mt-2 space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {car.transmission}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {car.fuel}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {car.seats} seats
            </span>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">${car.priceUSD}<span className="text-sm font-normal">/day</span></div>
              <div className="text-xs text-gray-500">{Number(car.priceRWF).toLocaleString()} RWF</div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/cars/${car.id}`)}
                className="rounded-full px-4 hover:bg-gray-50 transition-colors"
              >
                Details
              </Button>
              <Button 
                onClick={() => navigate(`/contact?car=${car.id}`)} 
                className="rounded-full px-4 bg-[var(--primary)] text-white hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Carousel indicators */}
      <div className="flex justify-center mt-6 gap-3">
        {featuredCars.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[var(--primary)] w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => handleManualChange(index)}
            aria-label={`View car ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}