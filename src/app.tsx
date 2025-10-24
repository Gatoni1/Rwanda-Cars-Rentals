import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import Index from '@/pages/Index'
import Cars from '@/pages/Cars'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import CarDetails from '@/pages/CarDetails'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <SEO />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/cars/details" element={<CarDetails />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
