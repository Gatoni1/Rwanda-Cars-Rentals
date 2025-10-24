import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from '@/components/ui'
import SEO from '@/components/SEO'

export default function Services() {
    return (
        <div className="pt-24 max-w-6xl mx-auto px-6 py-16">
            <SEO title="Services - Rwanda Cars Rentals" description="Comprehensive rental services across Rwanda including airport transfers, chauffeur services and safari-ready vehicles." />
            <h1 className="text-3xl font-heading text-[var(--secondary)]">Services</h1>

            <p className="mt-4 text-gray-600">We provide a full range of car rental and mobility services across Rwanda — from short city drives to multi-day safari expeditions. Below is a detailed guide to what we offer, how booking works, and useful extras to make your trip comfortable and safe.</p>

            {/* Types of cars */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Types of Vehicles</h2>
                <p className="mt-3 text-gray-600">Choose from a modern, well-maintained fleet to match your needs and budget.</p>

                <div className="mt-6 p-6 rounded-2xl gradient-hero">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🚗</div>
                                <div>
                                    <h3 className="font-semibold">Economy / Compact</h3>
                                    <p className="mt-2 text-sm text-gray-600">Fuel-efficient small cars for city travel and short trips — great value for solo travellers and couples.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🚘</div>
                                <div>
                                    <h3 className="font-semibold">Sedans</h3>
                                    <p className="mt-2 text-sm text-gray-600">Comfortable, mid-size cars suitable for business and family travel.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🚙</div>
                                <div>
                                    <h3 className="font-semibold">SUVs</h3>
                                    <p className="mt-2 text-sm text-gray-600">Spacious SUVs for rougher roads and family trips — more cargo and passenger room.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">💼</div>
                                <div>
                                    <h3 className="font-semibold">Luxury</h3>
                                    <p className="mt-2 text-sm text-gray-600">High-end vehicles (Land Cruisers, premium sedans) for corporate travel and special occasions.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🧳</div>
                                <div>
                                    <h3 className="font-semibold">Vans & Minivans</h3>
                                    <p className="mt-2 text-sm text-gray-600">7–12 seat options for groups, airport transfers, and tours.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🛻</div>
                                <div>
                                    <h3 className="font-semibold">Coaster / Bus & 4x4</h3>
                                    <p className="mt-2 text-sm text-gray-600">15–20 seat vehicles for large groups and rugged 4x4s for safaris and off-road routes.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Rental options */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Rental Options</h2>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">📅</div>
                            <div>
                                <h3 className="font-semibold">Daily Rentals</h3>
                                <p className="mt-2 text-sm text-gray-600">Perfect for short trips and city use — flexible pickup and drop-off.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🗓️</div>
                            <div>
                                <h3 className="font-semibold">Weekly Rentals</h3>
                                <p className="mt-2 text-sm text-gray-600">Cost-efficient for week-long stays or business travel — discounted weekly rates.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🏢</div>
                            <div>
                                <h3 className="font-semibold">Monthly & Corporate</h3>
                                <p className="mt-2 text-sm text-gray-600">Long-term solutions and corporate leasing with maintenance options and tailored billing.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Booking process */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Booking Process</h2>
                <Card className="mt-4">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">📝</div>
                        <div>
                            <p className="text-gray-700">We make booking easy with multiple channels:</p>
                            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Online booking:</strong> Use our website to browse the fleet, choose dates, and reserve instantly.</li>
                                <li><strong>Phone booking:</strong> Call our reservations team for assistance, custom quotes, and group bookings.</li>
                                <li><strong>In-person:</strong> Visit our office for hands-on assistance and vehicle inspections prior to departure.</li>
                            </ul>
                            <p className="mt-3 text-sm text-gray-500">Tip: For peak travel seasons and weekend departures, we recommend booking at least 48–72 hours in advance.</p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Delivery and pick-up */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Delivery & Pick-up</h2>
                <p className="mt-3 text-gray-600">Convenient delivery and collection options to save you time:</p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Airport pick-up & drop-off:</strong> We provide timely meet-and-greet services at Kigali International Airport. Drivers monitor flight arrivals so pickup is seamless.</li>
                    <li><strong>Hotel delivery:</strong> We can deliver the vehicle directly to your hotel or accommodation.</li>
                    <li><strong>Business delivery:</strong> Corporate pickups and vehicle drop-offs at offices or event venues available on request.</li>
                    <li><strong>Out-of-town handover:</strong> For long-distance or cross-border trips, special handover locations can be arranged in advance.</li>
                </ul>
            </section>

            {/* Driver services */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Driver Services</h2>
                <p className="mt-3 text-gray-600">Select the driving option that suits you:</p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Self-drive:</strong> Rent and drive yourself (requires a valid driving license and a security deposit). Ideal for independent travellers.</li>
                    <li><strong>Chauffeur-driven:</strong> Professional driver included — recommended for city transfers, business travel, or trips where you prefer to relax.</li>
                    <li><strong>Long-distance chauffeurs:</strong> Experienced drivers for safaris and long-haul journeys — available for hourly or daily rates.</li>
                </ul>
            </section>

            {/* Insurance coverage */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Insurance & Liability</h2>
                <p className="mt-3 text-gray-600">We prioritise your safety and clarity on coverages:</p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Basic coverage:</strong> All rentals include mandatory third-party liability cover as required by Rwandan law.</li>
                    <li><strong>Optional insurance:</strong> Collision Damage Waiver (CDW) and theft protection are available as add-ons to reduce your financial liability in case of accidental damage or theft.</li>
                    <li><strong>Excess / deductible:</strong> Optional waivers reduce excess amounts. Full terms are provided at booking.</li>
                    <li><strong>Driver & passenger coverage:</strong> Insurance for passengers and driver is available depending on the selected package; details are provided during checkout.</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">Note: Insurance terms, exclusions (off-road use, driver age, international travel), and required documentation will be clearly outlined on booking.</p>
            </section>

            {/* Tourist packages */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Tourist & Safari Packages</h2>
                <p className="mt-3 text-gray-600">Choose from curated itineraries or build your own adventure. Popular packages include:</p>
                <div className="mt-4 p-6 rounded-2xl gradient-hero">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🏙️</div>
                                <div>
                                    <h3 className="font-semibold">Kigali City Experience (1–2 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Guided city tours, genocide memorial visit, cultural experiences, and convenient hotel transfers.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🌳</div>
                                <div>
                                    <h3 className="font-semibold">Nyungwe Forest Weekend (2–3 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">4x4 transport, guided canopy walks, chimp tracking options, and accommodation transfers.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🦁</div>
                                <div>
                                    <h3 className="font-semibold">Akagera Safari (2–3 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Safari-ready 4x4s, park permits assistance, guided game drives and lodge transfers.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🌊</div>
                                <div>
                                    <h3 className="font-semibold">Lake Kivu Retreat (1–2 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Comfortable vehicles, island visits, boat transfers and lakeside hotel drop-offs.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🦍</div>
                                <div>
                                    <h3 className="font-semibold">Volcanoes Gorilla Trek (2–3 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">4x4 transport to Volcanoes National Park, gorilla permit assistance, luxury lodge connections, and Musanze town visits.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🌿</div>
                                <div>
                                    <h3 className="font-semibold">Twin Lakes Adventure (2 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Visit Lakes Burera & Ruhondo, scenic drives, hiking opportunities, and authentic village experiences.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🏺</div>
                                <div>
                                    <h3 className="font-semibold">Cultural Heritage Tour (1–2 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Visit the King's Palace Museum, Ethnographic Museum, artisan workshops, and traditional dance performances.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🌄</div>
                                <div>
                                    <h3 className="font-semibold">Congo Nile Trail (3–5 days)</h3>
                                    <p className="mt-2 text-sm text-gray-700">Support vehicle for hikers/bikers, lakeside camping equipment, scenic stops, and flexible pickup points.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">Custom multi-destination tours and multi-day vehicle + driver packages are available — contact us for group discounts and permits.</p>
            </section>

            {/* Extras */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Extras & Add-ons</h2>
                <div className="mt-4 p-6 rounded-2xl gradient-hero">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">👶</div>
                                <div>
                                    <h3 className="font-semibold">Child seats</h3>
                                    <p className="mt-2 text-sm text-gray-600">Infant and booster seats available on request.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🛰️</div>
                                <div>
                                    <h3 className="font-semibold">GPS / Navigation</h3>
                                    <p className="mt-2 text-sm text-gray-600">Portable GPS units or offline map recommendations.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">📶</div>
                                <div>
                                    <h3 className="font-semibold">Wi‑Fi hotspot</h3>
                                    <p className="mt-2 text-sm text-gray-600">Onboard Wi‑Fi for staying connected during your trip.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">➕</div>
                                <div>
                                    <h3 className="font-semibold">Additional driver</h3>
                                    <p className="mt-2 text-sm text-gray-600">Add extra authorised drivers to your rental.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">🧰</div>
                                <div>
                                    <h3 className="font-semibold">Roof racks & carriers</h3>
                                    <p className="mt-2 text-sm text-gray-600">For surfboards, bikes or extra luggage.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Payment methods */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Payment Methods</h2>
                <p className="mt-3 text-gray-600">We accept multiple convenient payment options:</p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Mobile money:</strong> MTN MoMo & Airtel Money (popular and widely used in Rwanda).</li>
                    <li><strong>Credit / Debit cards:</strong> Visa and Mastercard accepted for deposits and payments.</li>
                    <li><strong>Bank transfer:</strong> For corporate bookings and long-term rentals.</li>
                    <li><strong>Cash:</strong> Accepted at our office for in-person pickups.</li>
                </ul>
            </section>

            {/* Customer support */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-[var(--secondary)]">Customer Support & Emergency</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">📞</div>
                            <div>
                                <h3 className="font-semibold">24/7 Helpline</h3>
                                <p className="mt-2 text-sm text-gray-600">Emergency assistance for breakdowns, accidents and urgent queries. We provide prompt help and direction whenever needed.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">🔧</div>
                            <div>
                                <h3 className="font-semibold">On-road Assistance</h3>
                                <p className="mt-2 text-sm text-gray-600">Towing and mechanic support available depending on your package. Local contacts and WhatsApp support for fast responses.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Call to action */}
            <section className="mt-10 bg-[var(--accent)] p-6 rounded-2xl">
                <h3 className="text-xl font-semibold">Ready to book?</h3>
                <p className="mt-2 text-gray-700">Browse our fleet on the <Link to="/cars" className="text-[var(--primary)] font-medium hover:underline">Cars</Link> page or contact us directly to arrange a custom package.</p>
                <div className="mt-4 flex gap-3">
                    <Link to="/cars"><Button className="rounded-xl">Explore Fleet</Button></Link>
                    <Link to="/contact"><Button variant="ghost" className="rounded-xl">Contact Us</Button></Link>
                </div>
            </section>

        </div>
    )
}
