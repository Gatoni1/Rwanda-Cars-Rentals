import React, { useState, useEffect, useRef } from 'react'
import { Card } from './ui'
import { motion, AnimatePresence } from 'framer-motion'

interface Review {
    name: string;
    text: string;
    rating: number;
    company: string;
    image: string;
    position: string;
}

const reviews: Review[] = [
    { 
        name: 'Alice Mutoni', 
        text: 'Great service and very clean cars. The driver was professional and punctual. Will definitely use again!', 
        rating: 5,
        company: 'Kigali Tours',
        image: '/assets/images/testimonial-1.jpg',
        position: 'Marketing Director'
    },
    { 
        name: 'Brian Mugisha', 
        text: 'Professional drivers and easy booking process. The vehicle was in excellent condition and perfect for our family trip.', 
        rating: 5,
        company: 'Tech Rwanda',
        image: '/assets/images/testimonial-2.jpg',
        position: 'CEO'
    },
    { 
        name: 'Chantal Uwase', 
        text: 'Highly recommend for corporate travel. Their fleet is modern and the service is reliable. Our team was very impressed.', 
        rating: 4,
        company: 'Akagera Investments',
        image: '/assets/images/testimonial-3.jpg',
        position: 'Operations Manager'
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const autoplayRef = useRef<NodeJS.Timeout | null>(null)
    
    const nextTestimonial = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
        setTimeout(() => setIsAnimating(false), 500)
    }
    
    const prevTestimonial = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
        setTimeout(() => setIsAnimating(false), 500)
    }
    
    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            nextTestimonial()
        }, 5000)
        
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current)
            }
        }
    }, [currentIndex, isAnimating])
    
    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <svg 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }
    
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.span 
                        className="inline-block px-4 py-1 bg-accent bg-opacity-50 rounded-full text-sm font-medium text-primary mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        What Our Customers Say
                    </motion.h2>
                </div>
                
                <div className="relative">
                    {/* Desktop version - show multiple testimonials */}
                    <div className="hidden md:grid grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div 
                                key={review.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-primary">
                                                {review.image ? (
                                                    <img 
                                                        src={review.image} 
                                                        alt={review.name} 
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            const img = e.target as HTMLImageElement;
                                                            img.src = 'https://ui-avatars.com/api/?name=' + review.name.replace(' ', '+');
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-lg font-bold text-primary">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-secondary">{review.name}</div>
                                                <div className="text-sm text-gray-500">{review.position}</div>
                                                <div className="text-xs text-primary font-medium">{review.company}</div>
                                                <div className="flex mt-1">
                                                    {renderStars(review.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 flex-grow">"{review.text}"</p>
                                        <div className="mt-4 text-right">
                                            <svg className="w-8 h-8 text-gray-200 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Mobile version - carousel */}
                    <div className="md:hidden relative">
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full"
                                >
                                    <Card className="bg-white shadow-md">
                                        <div className="flex flex-col">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-primary">
                                                    {reviews[currentIndex].image ? (
                                                        <img 
                                                            src={reviews[currentIndex].image} 
                                                            alt={reviews[currentIndex].name} 
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                const img = e.target as HTMLImageElement;
                                                                img.src = 'https://ui-avatars.com/api/?name=' + reviews[currentIndex].name.replace(' ', '+');
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-lg font-bold text-primary">
                                                            {reviews[currentIndex].name.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-secondary">{reviews[currentIndex].name}</div>
                                                    <div className="text-sm text-gray-500">{reviews[currentIndex].position}</div>
                                                    <div className="text-xs text-primary font-medium">{reviews[currentIndex].company}</div>
                                                    <div className="flex mt-1">
                                                        {renderStars(reviews[currentIndex].rating)}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600">"{reviews[currentIndex].text}"</p>
                                            <div className="mt-4 text-right">
                                                <svg className="w-8 h-8 text-gray-200 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* Navigation buttons */}
                        <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-2">
                            <button 
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                                disabled={isAnimating}
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                                disabled={isAnimating}
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Indicators */}
                        <div className="flex justify-center mt-6 gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-primary w-6' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    onClick={() => {
                                        if (isAnimating) return
                                        setIsAnimating(true)
                                        setCurrentIndex(index)
                                        setTimeout(() => setIsAnimating(false), 500)
                                    }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
