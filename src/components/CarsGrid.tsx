import React from 'react'
import cars from '@/data/cars.json'
import featuredCars from '@/data/featured-cars.json'
import { Card, Button } from './ui'
import { useNavigate } from 'react-router-dom'

export default function CarsGrid({ featured = false }) {
    const navigate = useNavigate()
    const displayCars = featured ? featuredCars : cars
    return (
        <div className={`grid ${featured ? 'grid-cols-1 md:grid-cols-2 gap-10' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
            {displayCars.map((car: any) => (
                <Card key={car.id} className={`hover:scale-105 transition-transform ${featured ? 'p-8' : 'p-6'}`}>
                    <div className={`w-full ${featured ? 'h-72' : 'h-56'} bg-gradient-to-br from-white to-[var(--accent)] rounded-2xl flex items-center justify-center soft-shadow overflow-hidden`}>
                        <img
                            src={encodeURI(car.image)}
                            alt={car.name}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-2xl"
                            onError={(e) => {
                                const img = e.target as HTMLImageElement
                                // hide broken image and keep the card style intact
                                img.style.display = 'none'
                                console.error(`Failed to load image for ${car.name}`)
                            }}
                        />
                    </div>
                    <h3 className="mt-4 font-semibold text-[var(--secondary)]">{car.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{car.transmission} • {car.fuel} • {car.seats} seats</p>
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <div className="text-lg font-semibold">${car.priceUSD}/day</div>
                            <div className="text-xs text-gray-400">{Number(car.priceRWF).toLocaleString()} RWF</div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => navigate(`/cars/${car.id}`)}>Details</Button>
                            <Button onClick={() => navigate(`/contact?car=${car.id}`)} style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>Book Now</Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
