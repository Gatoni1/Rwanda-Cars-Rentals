import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import MobileBottomNav from '@/components/MobileBottomNav'
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

// Lazy load page components for code splitting
const Index = lazy(() => import('@/pages/Index'))
const Cars = lazy(() => import('@/pages/Cars'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const CarDetails = lazy(() => import('@/pages/CarDetails'))

// Page transition variants
const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 10
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -10
    }
}

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
}

// Loading animation
const loadingVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
}

export default function App() {
    const location = useLocation();
    
    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <SEO />
            <main className="flex-1 pb-20 md:pb-0">
                <Suspense fallback={
                    <motion.div 
                        className="flex flex-col items-center justify-center h-screen"
                        initial="initial"
                        animate="animate"
                        variants={loadingVariants}
                    >
                        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                        <p className="mt-4 text-secondary font-medium">Loading...</p>
                    </motion.div>
                }>
                    <AnimatePresence mode="wait">
                        <Routes key={location.pathname}>
                            <Route path="/" element={
                                <PageTransition>
                                    <Index />
                                </PageTransition>
                            } />
                            <Route path="/cars" element={
                                <PageTransition>
                                    <Cars />
                                </PageTransition>
                            } />
                            <Route path="/cars/:id" element={
                                <PageTransition>
                                    <CarDetails />
                                </PageTransition>
                            } />
                            <Route path="/services" element={
                                <PageTransition>
                                    <Services />
                                </PageTransition>
                            } />
                            <Route path="/about" element={
                                <PageTransition>
                                    <About />
                                </PageTransition>
                            } />
                            <Route path="/contact" element={
                                <PageTransition>
                                    <Contact />
                                </PageTransition>
                            } />
                        </Routes>
                    </AnimatePresence>
                </Suspense>
            </main>
            <MobileBottomNav />
            <Footer />
        </div>
    )
}

// Page transition wrapper component
function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}
