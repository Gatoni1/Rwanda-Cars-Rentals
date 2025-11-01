import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui'
import { useNavigate } from 'react-router-dom'

const heroImages = [
    "/assets/images/optimized/Toyota Prado 7seats.webp",
    "/assets/images/optimized/Toyota land cruiser V8 7seats.webp",
    "/assets/images/optimized/Toyota RAV4 2022 hybrid 5seats.webp"
]

interface FloatingElementProps {
    delay: number;
    duration: number;
    x: number;
    y: number;
    size: number;
    color: string;
    className?: string;
}

const FloatingElement = ({ delay, duration, x, y, size, color, className }: FloatingElementProps) => (
    <motion.div
        className={`absolute rounded-full ${className}`}
        style={{ 
            width: size, 
            height: size, 
            backgroundColor: color,
            opacity: 0.1
        }}
        animate={{
            y: [y, y - 15, y],
            x: [x, x + 10, x],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "loop"
        }}
    />
)

export default function HeroSection() {
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % heroImages.length)
        }, 5000)
        
        return () => clearInterval(interval)
    }, [])
    
    return (
        <section className="gradient-hero pt-28 relative overflow-hidden">
            {/* Animated background elements */}
            <FloatingElement delay={0} duration={4} x={100} y={100} size={80} color="var(--primary)" className="hidden md:block" />
            <FloatingElement delay={1} duration={7} x={300} y={400} size={120} color="var(--accent)" className="hidden md:block" />
            <FloatingElement delay={2} duration={5} x={700} y={200} size={60} color="var(--secondary)" className="hidden md:block" />
            <FloatingElement delay={0.5} duration={6} x={20} y={300} size={40} color="var(--primary)" className="hidden md:block" />
            
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        className="inline-block px-4 py-1 bg-accent bg-opacity-30 rounded-full text-sm font-medium text-primary mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        #1 Car Rental in Rwanda
                    </motion.span>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                        <motion.span 
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Premium Car Rental
                        </motion.span>
                        <motion.span 
                            className="block text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            in Rwanda
                        </motion.span>
                    </h1>
                    
                    <motion.p 
                        className="mt-4 text-gray-600 max-w-prose"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Drive comfort and style with Rwanda's best rental service. Modern fleet, clear pricing and professional drivers.
                    </motion.p>
                    
                    <motion.div 
                        className="mt-8 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <Button 
                            className="rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                            style={{ backgroundColor: 'var(--primary)', color: '#fff' }} 
                            onClick={() => navigate('/contact')}
                        >
                            Book Your Car
                        </Button>
                        <Button 
                            variant="outline" 
                            className="rounded-full px-6 py-3 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1" 
                            onClick={() => navigate('/cars')}
                        >
                            Explore Fleet
                        </Button>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3 opacity-20"></div>
                    <div className="w-full h-64 md:h-80 bg-gradient-to-br from-white to-accent rounded-2xl flex items-center justify-center shadow-xl overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={heroImages[currentImageIndex]}
                                alt="Featured Car"
                                className="w-full h-full object-cover rounded-2xl"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.7 }}
                                onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    // Fallback to a known working optimized image
                                    img.src = "/assets/images/optimized/Toyota Prado 7seats.webp";
                                }}
                            />
                        </AnimatePresence>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex 
                                            ? 'bg-white w-6' 
                                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    aria-label={`View image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
