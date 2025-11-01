import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [solid, setSolid] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const loc = useLocation()
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            
            // Calculate scroll progress for progress bar
            const progress = Math.min(currentScrollY / scrollHeight, 1)
            setScrollProgress(progress)
            
            // Determine if header should be solid
            setSolid(currentScrollY > 30)
            
            // Hide header on scroll down, show on scroll up
            if (currentScrollY > prevScrollY && currentScrollY > 100 && !menuOpen) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            
            setPrevScrollY(currentScrollY)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollY, menuOpen])

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false)
    }, [loc.pathname])

    // Keep mobile menu collapsed by default on small screens
    useEffect(() => {
        try {
            // Initialize as closed regardless of screen size
            setMenuOpen(false)
        } catch (e) {
            // ignore in non-browser environments
        }
    }, [])

    return (
        <motion.header 
            className={`fixed w-full z-40 transition-all duration-300 ${
                solid || menuOpen 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
            }`}
            initial={{ y: 0 }}
            animate={{ 
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Progress bar */}
            <div 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" 
                style={{ width: `${scrollProgress * 100}%` }}
            />
            
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo with animation */}
                <Link to="/" aria-label="Rwanda Cars Rentals" className="group inline-flex items-center">
                    <motion.div 
                        className="flex items-center text-2xl md:text-3xl font-black tracking-wider"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent">
                            RWANDA
                        </span>
                        <span className="text-[var(--primary)] mx-2 opacity-75 group-hover:opacity-100 transition-opacity">×</span>
                        <span className="text-[var(--secondary)]">
                            CARS
                        </span>
                        <span className="text-[var(--primary)] ml-1.5 -mr-1 animate-pulse">•</span>
                    </motion.div>
                </Link>

                <nav className="hidden md:flex gap-6 items-center text-sm text-[var(--secondary)]">
                    {['/', '/cars', '/services', '/about', '/contact'].map((path) => (
                        <Link 
                            key={path} 
                            to={path} 
                            className={`relative px-2 py-1 hover:text-[var(--primary)] transition-colors duration-300 ${
                                loc.pathname === path ? 'font-semibold' : ''
                            }`}
                        >
                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                            {loc.pathname === path && (
                                <motion.span 
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                                    layoutId="navbar-indicator"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link to="/cars" className="hidden md:block">
                        <Button 
                            variant="ghost"
                            className="rounded-full hover:bg-gray-50 transition-all duration-300"
                        >
                            Explore
                        </Button>
                    </Link>
                    <Link to="/contact" className="hidden md:block">
                        <Button 
                            className="rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" 
                            style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
                        >
                            Book Now
                        </Button>
                    </Link>

                    {/* Mobile toggle with animation */}
                    <motion.button
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(v => !v)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--secondary)]"
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu panel with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg z-50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pt-4 pb-6 space-y-4">
                            <nav className="flex flex-col gap-3">
                                {['/', '/cars', '/services', '/about', '/contact'].map((path) => (
                                    <Link 
                                        key={path}
                                        to={path} 
                                        className={`py-2 rounded-md text-[var(--secondary)] transition-colors duration-300 ${
                                            loc.pathname === path 
                                                ? 'font-semibold bg-gray-50 pl-3 border-l-2 border-[var(--primary)]' 
                                                : ''
                                        }`}
                                    >
                                        {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                                <Link to="/cars" className="inline-block">
                                    <Button variant="ghost" className="w-full rounded-full">Explore</Button>
                                </Link>
                                <Link to="/contact">
                                    <Button 
                                        className="w-full rounded-full shadow-md" 
                                        style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
                                    >
                                        Book Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
