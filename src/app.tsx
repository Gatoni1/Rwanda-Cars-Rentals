import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

// Lazy load page components for code splitting
const Index = lazy(() => import('@/pages/Index'))
const Cars = lazy(() => import('@/pages/Cars'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const CarDetails = lazy(() => import('@/pages/CarDetails'))

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <SEO />
            <main className="flex-1">
                <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/cars/:id" element={<CarDetails />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}
