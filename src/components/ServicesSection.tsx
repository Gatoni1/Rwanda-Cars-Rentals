import React from 'react'
import { Card } from './ui'

const services = [
    { icon: '🚗', title: 'Airport Transfer', desc: 'Timely pickup and drop-off with professional drivers.' },
    { icon: '👨‍✈️', title: 'Chauffeur Service', desc: 'Experienced chauffeurs for comfortable journeys.' },
    { icon: '🔒', title: 'Long-Term Rental', desc: 'Flexible terms for long stays and business needs.' },
    { icon: '🏢', title: 'Corporate Fleet', desc: 'Reliable solutions for corporate transportation.' }
]

export default function ServicesSection() {
    return (
        <section>
            <h2 className="text-3xl font-heading text-[var(--secondary)]">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map(s => (
                    <Card key={s.title} className="border border-transparent hover:border-[var(--primary)]">
                        <div className="text-3xl">{s.icon}</div>
                        <h3 className="mt-4 font-semibold text-[var(--secondary)]">{s.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}
