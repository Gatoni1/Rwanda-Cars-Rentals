import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'
import SEO from '@/components/SEO'
import ServicesSection from '@/components/ServicesSection'
import CarsGrid from '@/components/CarsGrid'
import Testimonials from '@/components/Testimonials'
import MobileBookingWidget from '@/components/MobileBookingWidget'
import FeaturedCarCarousel from '@/components/FeaturedCarCarousel'

export default function Index() {
    return (
        <div className="pt-24">
            <SEO title="Home - Rwanda Cars Rentals" description="Explore our featured vehicles, reliable chauffeur services and easy booking across Rwanda." />
            <HeroSection />
            {/* Mobile booking widget fixed near bottom on mobile */}
            <div className="md:hidden">
                <MobileBookingWidget />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16">
                <ServicesSection />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-heading mb-6 text-[var(--secondary)]">Featured Vehicles</h2>
                {/* Show carousel on mobile, grid on desktop */}
                <div className="block md:hidden">
                    <FeaturedCarCarousel />
                </div>
                <div className="hidden md:block">
                    <CarsGrid featured={true} />
                </div>
                <div className="mt-8 text-center">
                    <Link to="/cars" className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline">
                        View all vehicles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            
            {/* Why Choose Us Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 my-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-white opacity-10 rounded-3xl"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full"></div>
                
                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-[var(--accent)] bg-opacity-30 rounded-full text-sm font-medium text-[var(--primary)] mb-3">Premium Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)]">Why Choose <span className="text-[var(--primary)]">RwandaCars</span></h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">Safety First</h3>
                            <p className="text-gray-600">All our vehicles undergo rigorous maintenance and safety checks to ensure your journey is worry-free and secure.</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">Best Value</h3>
                            <p className="text-gray-600">Competitive pricing with no hidden fees. We offer the best rates for premium vehicles in Rwanda with transparent pricing.</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">Local Expertise</h3>
                            <p className="text-gray-600">Our team knows Rwanda inside out. Get insider tips and recommendations for your journey from our experienced local staff.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
