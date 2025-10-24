import React from 'react'
import { Card } from './ui'

const reviews = [
    { name: 'Alice', text: 'Great service and very clean cars.' },
    { name: 'Brian', text: 'Professional drivers and easy booking.' },
    { name: 'Chantal', text: 'Highly recommend for corporate travel.' }
]

export default function Testimonials() {
    return (
        <section>
            <h2 className="text-3xl font-heading text-[var(--secondary)]">What Our Customers Say</h2>
            <div className="mt-6 flex gap-4 overflow-x-auto py-2">
                {reviews.map(r => (
                    <Card key={r.name} className="min-w-[260px] flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">P</div>
                            <div>
                                <div className="font-semibold">{r.name}</div>
                                <div className="text-sm text-gray-500">Verified customer</div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">“{r.text}”</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}
