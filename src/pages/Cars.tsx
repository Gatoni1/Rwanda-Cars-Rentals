import React from 'react'
import CarsGrid from '@/components/CarsGrid'
import SEO from '@/components/SEO'

export default function Cars() {
    return (
        <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
            <SEO title="Our Fleet - Rwanda Cars Rentals" description="Browse our diverse fleet of cars in Rwanda: SUVs, sedans, vans and luxury vehicles for every trip." />
            <h1 className="text-3xl font-heading text-[var(--secondary)]">Our Fleet</h1>
            <p className="mt-2 text-gray-600">Choose the perfect car for your trip.</p>
            <div className="mt-6"><CarsGrid /></div>
        </div>
    )
}
