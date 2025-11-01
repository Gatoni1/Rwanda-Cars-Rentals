import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileBottomNav() {
  const loc = useLocation()
  const isActive = (path: string) => loc.pathname === path
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [activeTab, setActiveTab] = useState('/')
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(loc.pathname)
  }, [loc])
  
  return (
    <AnimatePresence>
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        aria-label="Primary"
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-2 grid grid-cols-4 gap-2 text-xs">
          {[
            { path: '/', icon: '🏠', label: 'Home' },
            { path: '/cars', icon: '🚗', label: 'Cars' },
            { path: '/services', icon: '🛠️', label: 'Services' },
            { path: '/contact', icon: '✉️', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className="relative flex flex-col items-center justify-center py-2"
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={false}
                animate={{
                  backgroundColor: isActive(item.path) ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent'
                }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.span 
                aria-hidden
                className="text-xl relative z-10"
                initial={false}
                animate={{
                  scale: isActive(item.path) ? 1.2 : 1,
                  y: isActive(item.path) ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.icon}
              </motion.span>
              
              <motion.span 
                className={`mt-1 relative z-10 ${isActive(item.path) ? 'text-[var(--primary)] font-semibold' : 'text-[var(--secondary)]'}`}
                initial={false}
                animate={{
                  scale: isActive(item.path) ? 1.05 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
              
              {isActive(item.path) && (
                <motion.div
                  className="absolute bottom-0 left-1/2 w-10 h-1 bg-[var(--primary)] rounded-t-full"
                  initial={{ width: 0, x: "-50%" }}
                  animate={{ width: "60%", x: "-50%" }}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        
        {/* Quick action button */}
        <motion.div 
          className="absolute -top-12 left-1/2 -translate-x-1/2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Link to="/cars" className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)] text-white shadow-lg">
            <span className="text-xl">🔍</span>
          </Link>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  )
}