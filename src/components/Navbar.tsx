import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui'

export default function Navbar() {
    const [solid, setSolid] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const loc = useLocation()

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 30)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false)
    }, [loc.pathname])

    // Open mobile menu by default on small screens so navigation pages are visible
    useEffect(() => {
        try {
            if (window.innerWidth < 768) {
                setMenuOpen(true)
            }
        } catch (e) {
            // ignore in non-browser environments
        }
    }, [])

    return (
        <header className={`fixed w-full z-40 transition-colors backdrop-blur-sm ${solid || menuOpen ? 'bg-white/95 shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Single-line creative typographic logo with mixed weights and gradient */}
                <Link to="/" aria-label="Rwanda Cars Rentals" className="group inline-flex items-center">
                    <div className="flex items-center text-2xl md:text-3xl font-black tracking-wider hover:scale-105 transition-transform">
                        <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent">
                            RWANDA
                        </span>
                        <span className="text-[var(--primary)] mx-2 opacity-75 group-hover:opacity-100 transition-opacity">×</span>
                        <span className="text-[var(--secondary)]">
                            CARS
                        </span>
                        <span className="text-[var(--primary)] ml-1.5 -mr-1 animate-pulse">•</span>
                    </div>
                </Link>

                <nav className="hidden md:flex gap-6 items-center text-sm text-[var(--secondary)]">
                    <Link to="/" className={`hover:text-[var(--primary)] ${loc.pathname === '/' ? 'font-semibold' : ''}`}>Home</Link>
                    <Link to="/cars" className={`hover:text-[var(--primary)] ${loc.pathname === '/cars' ? 'font-semibold' : ''}`}>Cars</Link>
                    <Link to="/services" className={`hover:text-[var(--primary)] ${loc.pathname === '/services' ? 'font-semibold' : ''}`}>Services</Link>
                    <Link to="/about" className={`hover:text-[var(--primary)] ${loc.pathname === '/about' ? 'font-semibold' : ''}`}>About</Link>
                    <Link to="/contact" className={`hover:text-[var(--primary)] ${loc.pathname === '/contact' ? 'font-semibold' : ''}`}>Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link to="/cars" className="hidden md:block">
                        <Button variant="ghost">Explore</Button>
                    </Link>
                    <Link to="/contact" className="hidden md:block">
                        <Button className="rounded-xl" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>Book Now</Button>
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(v => !v)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--secondary)] bg-white/0 hover:bg-white/5"
                    >
                        <svg className={`w-6 h-6 transition-transform ${menuOpen ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel (visible by default on small screens) */}
            <div className={`md:hidden bg-white/95 backdrop-blur-sm shadow-sm ${menuOpen ? 'block' : 'hidden'} z-50`}>
                <div className="px-6 pt-4 pb-6 space-y-4">
                    <nav className="flex flex-col gap-3">
                        <Link to="/" className={`py-2 rounded-md text-[var(--secondary)] ${loc.pathname === '/' ? 'font-semibold' : ''}`}>Home</Link>
                        <Link to="/cars" className={`py-2 rounded-md text-[var(--secondary)] ${loc.pathname === '/cars' ? 'font-semibold' : ''}`}>Cars</Link>
                        <Link to="/services" className={`py-2 rounded-md text-[var(--secondary)] ${loc.pathname === '/services' ? 'font-semibold' : ''}`}>Services</Link>
                        <Link to="/about" className={`py-2 rounded-md text-[var(--secondary)] ${loc.pathname === '/about' ? 'font-semibold' : ''}`}>About</Link>
                        <Link to="/contact" className={`py-2 rounded-md text-[var(--secondary)] ${loc.pathname === '/contact' ? 'font-semibold' : ''}`}>Contact</Link>
                    </nav>

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                        <Link to="/cars" className="inline-block">
                            <Button variant="ghost" className="w-full">Explore</Button>
                        </Link>
                        <Link to="/contact">
                            <Button className="w-full rounded-xl" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>Book Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
