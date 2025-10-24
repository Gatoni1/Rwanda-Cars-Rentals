import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
    const navigate = useNavigate()
    return (
        <section className="gradient-hero pt-28">
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl font-heading text-[var(--secondary)] leading-tight">Premium Car Rental in Rwanda</h1>
                    <p className="mt-4 text-gray-600 max-w-prose">Drive comfort and style with Rwanda’s best rental service. Modern fleet, clear pricing and professional drivers.</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button className="rounded-xl" style={{ backgroundColor: 'var(--primary)', color: '#fff' }} onClick={() => navigate('/contact')}>Book Your Car</Button>
                        <Button variant="outline" className="rounded-xl" onClick={() => navigate('/cars')}>Explore Fleet</Button>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <div className="w-full h-56 md:h-72 bg-gradient-to-br from-white to-[var(--accent)] rounded-2xl flex items-center justify-center soft-shadow overflow-hidden">
                        <img
                            src="/assets/images/Toyota Prado 7seats.jpg"
                            alt="Toyota Prado"
                            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                console.error('Failed to load hero image');
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
