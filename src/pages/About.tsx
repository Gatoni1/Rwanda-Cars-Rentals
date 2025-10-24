import React from 'react'
import { Card } from '@/components/ui'
import SEO from '@/components/SEO'

export default function About() {
    const teamMembers = [
        {
            icon: '👨‍💼',
            name: 'Ishimwe Fabrice',
            role: 'Founder & CEO',
            desc: 'Expert in business management and founder of the company, leading RwandaCars with vision and excellence.'
        },
        {
            icon: '�‍💼',
            name: 'Ikirezi Laurianne',
            role: 'Operations Manager',
            desc: 'Skilled operations professional ensuring smooth service delivery and exceptional customer experiences.'
        },
        {
            icon: '👨‍�',
            name: 'Gatoni Hirwa Bertrand',
            role: 'Website Administrator',
            desc: 'Tech-savvy professional managing our digital presence and ensuring seamless online operations.'
        }
    ]

    return (
        <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
            <SEO title="About Us - Rwanda Cars Rentals" description="Learn about Rwanda Cars Rentals: our mission, team, fleet and commitment to safe, reliable and sustainable travel across Rwanda." />
            {/* Hero Section */}
            <h1 className="text-3xl font-heading text-[var(--secondary)]">About Rwanda Cars Rentals</h1>
            <p className="mt-4 text-gray-600">Your trusted partner in exploring Rwanda with comfort, safety, and style.</p>

            {/* Company History */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Our Journey</h2>
                <div className="mt-4">
                    <Card>
                        <div className="space-y-4">
                            <p className="text-gray-600">Founded with a vision to transform travel experiences in Rwanda, RwandaCars has grown from a small fleet to become one of the country's most reliable car rental services. Our mission is to provide safe, comfortable, and hassle-free mobility solutions for both local and international clients.</p>
                            <p className="text-gray-600">We understand that each journey is unique, which is why we offer personalized services tailored to your specific needs - whether you're here for business, tourism, or long-term stays.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Values and Philosophy */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Our Values</h2>
                <div className="mt-6 p-6 rounded-2xl gradient-hero">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🛡️</div>
                                <div>
                                    <h3 className="font-semibold">Safety First</h3>
                                    <p className="mt-2 text-sm text-gray-600">Regular maintenance, comprehensive insurance, and well-trained drivers ensure your safety.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">⭐</div>
                                <div>
                                    <h3 className="font-semibold">Reliability</h3>
                                    <p className="mt-2 text-sm text-gray-600">Modern fleet, punctual service, and 24/7 support for peace of mind.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🌿</div>
                                <div>
                                    <h3 className="font-semibold">Sustainability</h3>
                                    <p className="mt-2 text-sm text-gray-600">Eco-friendly options and responsible practices for a greener future.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🤝</div>
                                <div>
                                    <h3 className="font-semibold">Customer Focus</h3>
                                    <p className="mt-2 text-sm text-gray-600">Personalized service and attention to detail in every interaction.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Meet Our Staff */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Meet Our Staff</h2>
                <div className="mt-6 p-6 rounded-2xl gradient-hero">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <Card key={index}>
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-3xl">{member.icon}</div>
                                    <h3 className="mt-4 font-semibold text-[var(--secondary)]">{member.name}</h3>
                                    <p className="text-[var(--primary)] font-medium">{member.role}</p>
                                    <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet and Technology */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Our Fleet & Technology</h2>
                <div className="mt-4">
                    <Card>
                        <div className="space-y-4">
                            <p className="text-gray-600">Our diverse fleet includes carefully selected vehicles from trusted manufacturers, maintained to the highest standards. From fuel-efficient compact cars to luxury SUVs, each vehicle undergoes rigorous maintenance checks to ensure reliability and comfort.</p>
                            <div className="mt-6">
                                <h3 className="font-semibold mb-3">Advanced Features:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>GPS tracking for enhanced security</li>
                                    <li>24/7 roadside assistance</li>
                                    <li>Digital booking system for convenience</li>
                                    <li>Regular sanitization and maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Local Expertise */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Rwanda Expertise</h2>
                <div className="mt-4">
                    <Card>
                        <div className="space-y-4">
                            <p className="text-gray-600">With years of experience in Rwanda, we offer unparalleled local knowledge. Our team knows the best routes, tourist attractions, and business districts across the country. Whether you're visiting the vibrant streets of Kigali, the serene shores of Lake Kivu, or the magnificent Volcanoes National Park, we ensure you travel with confidence.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Social Responsibility */}
            <section className="mt-12">
                <h2 className="text-2xl font-heading text-[var(--secondary)]">Community Impact</h2>
                <div className="mt-4">
                    <Card>
                        <div className="space-y-4">
                            <p className="text-gray-600">We're committed to making a positive impact in Rwanda. Through local employment, sustainable practices, and community initiatives, we strive to contribute to the country's development. Our eco-friendly vehicle options and responsible tourism practices reflect our dedication to environmental conservation.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mt-12">
                <div className="bg-[var(--accent)] rounded-2xl p-8">
                    <h2 className="text-2xl font-heading text-[var(--secondary)]">Get in Touch</h2>
                    <p className="mt-4 text-gray-600">Ready to experience Rwanda with RwandaCars? Our team is here to help you plan your journey.</p>
                    <div className="mt-6 space-y-2">
                        <p className="text-gray-600">📧 Email: ishifabrice3@gmail.com</p>
                        <p className="text-gray-600">📞 Phone: 0781728688</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
