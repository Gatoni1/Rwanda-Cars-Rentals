import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MobileBottomNav() {
  const loc = useLocation()
  const isActive = (path: string) => loc.pathname === path
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-6 py-2 grid grid-cols-4 gap-2 text-xs">
        <Link to="/" className={`flex flex-col items-center justify-center py-2 ${isActive('/') ? 'text-[var(--primary)] font-semibold' : 'text-[var(--secondary)]'}`}>
          <span aria-hidden>🏠</span>
          <span className="mt-1">Home</span>
        </Link>
        <Link to="/cars" className={`flex flex-col items-center justify-center py-2 ${isActive('/cars') ? 'text-[var(--primary)] font-semibold' : 'text-[var(--secondary)]'}`}>
          <span aria-hidden>🚗</span>
          <span className="mt-1">Cars</span>
        </Link>
        <Link to="/services" className={`flex flex-col items-center justify-center py-2 ${isActive('/services') ? 'text-[var(--primary)] font-semibold' : 'text-[var(--secondary)]'}`}>
          <span aria-hidden>🛠️</span>
          <span className="mt-1">Services</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center justify-center py-2 ${isActive('/contact') ? 'text-[var(--primary)] font-semibold' : 'text-[var(--secondary)]'}`}>
          <span aria-hidden>✉️</span>
          <span className="mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  )
}