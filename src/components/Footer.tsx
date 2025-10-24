import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[var(--secondary)] text-white">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <img src="/assets/images/Logo.png" alt="Rwanda Cars Rentals" className="h-12 w-auto md:h-10" />
                    <div className="text-center md:text-left">
                        <div className="font-heading text-xl">Rwanda Cars Rentals</div>
                        <p className="mt-2 text-sm text-gray-200">Premium car rental services across Rwanda.</p>
                    </div>
                </div>
                <div>
                    <div className="font-semibold">Quick Links</div>
                    <ul className="mt-3 space-y-2 text-gray-200">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/cars">Cars</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">Contact</div>
                    <p className="mt-3 text-gray-200 text-sm">Email: ishifabrice3@gmail.com</p>
                    <p className="text-gray-200 text-sm">Phone: 0781728688</p>
                </div>
            </div>
            <div className="border-t border-white/10 py-4 text-center text-sm">
                <div>© {new Date().getFullYear()} Rwanda Cars Rentals. All rights reserved.</div>
                <div className="text-gray-300 text-xs mt-1">Developed by Bertrand</div>
            </div>
        </footer>
    )
}
