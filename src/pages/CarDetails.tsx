import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cars from '@/data/cars.json'
import carDetails from '@/data/car-details.json'
import { Card } from '@/components/ui'
import SEO from '@/components/SEO'

interface CarDetailsType {
    features: string[]
    specs: {
        engine: string
        power: string
        transmission: string
        fuelType: string
        fuelEfficiency: string
        seating: string
        luggage: string
    }
    description: string
}

export default function CarDetails() {
    const { id } = useParams()
    const carId = id
    const car = cars.find(c => c.id.toString() === carId)
    const details = carId ? (carDetails as Record<string, CarDetailsType>)[carId] : null

    if (!car || !details) {
        return (
            <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-heading text-[var(--secondary)]">Car not found</h1>
                    <p className="mt-4 text-gray-600">The requested vehicle could not be found.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
            <SEO title={`${car.name} - Rwanda Cars Rentals`} description={details.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div>
                    <div className="w-full h-56 md:h-96 bg-gradient-to-br from-white to-[var(--accent)] rounded-2xl flex items-center justify-center overflow-hidden">
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover rounded-2xl"
                            onError={(e) => {
                                const img = e.target as HTMLImageElement
                                img.style.display = 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-3xl font-heading text-[var(--secondary)]">{car.name}</h1>
                    <div className="mt-2 flex gap-4 text-sm text-gray-600">
                        <span>{car.transmission}</span>
                        <span>•</span>
                        <span>{car.fuel}</span>
                        <span>•</span>
                        <span>{car.seats} seats</span>
                    </div>
                    <div className="mt-4">
                        <div className="text-2xl font-semibold">${car.priceUSD}/day</div>
                        <div className="text-sm text-gray-500">{Number(car.priceRWF).toLocaleString()} RWF</div>
                    </div>
                    <p className="mt-6 text-gray-600">{details.description}</p>
                </div>
            </div>

            {/* Specifications */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Specifications</h2>
                <Card className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(details.specs).map(([key, value]) => (
                            <div key={key}>
                                <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                <div className="mt-1 font-medium">{value}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Features */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Features & Amenities</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {details.features.map((feature, index) => (
                        <Card key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">✓</div>
                            <div className="text-sm">{feature}</div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}