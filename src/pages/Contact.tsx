import React from 'react'
import ContactForm from '@/components/ContactForm'
import { Card } from '@/components/ui'
import SEO from '@/components/SEO'

export default function Contact() {
    // Scroll to form if car parameter is present
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.has('car')) {
            const formElement = document.getElementById('booking-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    const contactMethods = [
        {
            icon: '📞',
            title: 'Phone & WhatsApp',
            details: ['0781728688'],
            description: 'Available 24/7 for urgent inquiries'
        },
        {
            icon: '📧',
            title: 'Email',
            details: ['ishifabrice3@gmail.com'],
            description: 'For bookings and general inquiries'
        },
        {
            icon: '📍',
            title: 'Location',
            details: ['Kigali - Kicukiro'],
            description: 'Visit our office for in-person assistance'
        },
        {
            icon: '⏰',
            title: 'Business Hours',
            details: ['Monday - Saturday: 8:00 AM - 6:00 PM', 'Sunday: 9:00 AM - 3:00 PM'],
            description: 'Available for pickups and returns'
        }
    ]

    return (
        <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
            <SEO title="Contact - Rwanda Cars Rentals" description="Get in touch with Rwanda Cars Rentals for bookings, support, and enquiries. Located in Kigali - Kicukiro." />
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto p-6 rounded-2xl gradient-hero">
                <h1 className="text-3xl md:text-4xl font-heading text-[var(--secondary)]">Premium Car rental in Rwanda</h1>
                <p className="mt-4 text-gray-600">Have questions about our services? Need a custom quote? Our team is here to help you plan your perfect journey in Rwanda.</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium btn-primary text-white">Book Your Car</a>
                    <a href="/cars" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium btn-ghost">Explore Fleet</a>
                </div>

                {/* end hero content */}
            </div>

            {/* Contact Methods Block (separate from hero) */}
            <div className="mt-8 max-w-6xl mx-auto px-6">
                <div className="rounded-2xl gradient-hero p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {contactMethods.map((method, index) => (
                            <Card key={index} className="text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent)] flex items-center justify-center text-2xl">
                                    {method.icon}
                                </div>
                                <h3 className="mt-4 font-semibold text-[var(--secondary)]">{method.title}</h3>
                                {method.details.map((detail, idx) => (
                                    <div key={idx} className="mt-2 font-medium text-[var(--primary)]">{detail}</div>
                                ))}
                                <p className="mt-2 text-sm text-gray-600">{method.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Methods (moved into hero for quick access) */}

            {/* Main Content */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                    <Card>
                        <h2 className="text-2xl font-heading text-[var(--secondary)]">Send Us a Message</h2>
                        <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                        <div className="mt-6">
                            <ContactForm />
                        </div>
                    </Card>
                </div>

                {/* Location & Additional Info */}
                <div className="space-y-6">
                    <Card>
                        <h2 className="text-2xl font-heading text-[var(--secondary)]">Visit Our Office</h2>
                        <div className="mt-4">
                            <div className="w-full h-[400px] rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5081092160547!2d30.100781599999998!3d-1.9791159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6372dff0bd5%3A0x13126ca19be9e300!2sKicukiro%2C%20Kigali!5e0!3m2!1sen!2srw!4v1698161824148!5m2!1sen!2srw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RwandaCars Office Location"
                                ></iframe>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-600"><strong>Address:</strong> Kigali - Kicukiro</p>
                                <p className="text-gray-600"><strong>Landmarks:</strong> Near Kicukiro Center</p>
                                <p className="text-sm text-[var(--primary)] hover:underline">
                                    <a
                                        href="https://www.google.com/maps/place/Kicukiro,+Kigali/@-1.9791159,30.1007816,17z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-heading text-[var(--secondary)]">Quick Response</h2>
                        <div className="mt-4 space-y-3">
                            <p className="text-gray-600">• Instant quotes available via WhatsApp</p>
                            <p className="text-gray-600">• 24/7 emergency support for existing bookings</p>
                            <p className="text-gray-600">• Same-day booking available (subject to availability)</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-12">
                <Card>
                    <h2 className="text-2xl font-heading text-[var(--secondary)]">Frequently Asked Questions</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-[var(--secondary)]">What documents do I need for rental?</h3>
                            <p className="mt-2 text-sm text-gray-600">Valid driver's license, passport/ID, and a credit card for security deposit. Additional documents may be required for international drivers.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--secondary)]">How far in advance should I book?</h3>
                            <p className="mt-2 text-sm text-gray-600">We recommend booking at least 48 hours in advance to ensure vehicle availability, especially during peak tourist seasons.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--secondary)]">Do you offer airport pickup?</h3>
                            <p className="mt-2 text-sm text-gray-600">Yes, we offer complimentary airport pickup and drop-off services with every rental booking.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--secondary)]">What's included in the rental price?</h3>
                            <p className="mt-2 text-sm text-gray-600">Basic insurance, maintenance, and 24/7 roadside assistance. Additional insurance options are available.</p>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    )
}
