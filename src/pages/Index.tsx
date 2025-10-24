import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'
import SEO from '@/components/SEO'
import ServicesSection from '@/components/ServicesSection'
import CarsGrid from '@/components/CarsGrid'
import Testimonials from '@/components/Testimonials'

export default function Index() {
    return (
        <div className="pt-24">
            <SEO title="Home - Rwanda Cars Rentals" description="Explore our featured vehicles, reliable chauffeur services and easy booking across Rwanda." />
            <HeroSection />
            <div className="max-w-6xl mx-auto px-6 py-16">
                <ServicesSection />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-heading mb-6 text-[var(--secondary)]">Featured Vehicles</h2>
                <CarsGrid featured={true} />
                <div className="mt-8 text-center">
                    <Link to="/cars" className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline">
                        View all vehicles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>

        </div>
    )
}
