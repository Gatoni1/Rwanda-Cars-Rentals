import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input, Textarea, Button, Modal } from './ui'
import cars from '@/data/cars.json'

interface FormData {
    name: string
    email: string
    message: string
    phone: string
    pickupDate: string
    returnDate: string
    needsDriver: boolean
    timestamp?: string
    carDetails?: {
        id: number
        name: string
        priceUSD: number
        priceRWF: number
    }
}

export default function ContactForm() {
    // Create a ref for the form element
    const formRef = React.useRef<HTMLDivElement>(null);
    const [searchParams] = useSearchParams()
    const carId = searchParams.get('car')
    const [data, setData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        phone: '',
        pickupDate: '',
        returnDate: '',
        needsDriver: false
    })
    const [open, setOpen] = useState(false)

    // If car ID is present, find car details
    useEffect(() => {
        if (carId) {
            const selectedCar = cars.find(c => c.id.toString() === carId)
            if (selectedCar) {
                setData(prev => ({
                    ...prev,
                    carDetails: {
                        id: selectedCar.id,
                        name: selectedCar.name,
                        priceUSD: selectedCar.priceUSD,
                        priceRWF: selectedCar.priceRWF
                    },
                    message: `I would like to book the ${selectedCar.name}.\n\nAdditional details:`
                }))
            }
        }
    }, [carId])

    const saveToLocalStorage = (formData: FormData) => {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        submissions.push({
            ...formData,
            timestamp: new Date().toISOString()
        })
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions))
    }

    const sendEmail = (formData: FormData) => {
        const isBooking = formData.carDetails !== undefined
        const subject = isBooking && formData.carDetails
            ? `Car Booking Request - ${formData.carDetails.name}`
            : `New Contact Form Submission from ${formData.name}`

        const carDetailsSection = isBooking && formData.carDetails ? `
Car Details:
- Model: ${formData.carDetails.name}
- Price: $${formData.carDetails.priceUSD}/day (${formData.carDetails.priceRWF.toLocaleString()} RWF)
- Pickup Date: ${formData.pickupDate}
- Return Date: ${formData.returnDate}
- Driver Requested: ${formData.needsDriver ? 'Yes' : 'No'}
` : ''

        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${carDetailsSection}${!isBooking && formData.needsDriver ? 'Driver Requested: Yes\n' : ''}
Message:
${formData.message}

Sent at: ${new Date().toLocaleString()}
        `.trim();

        const mailtoLink = `mailto:ishifabrice3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!data.name || !data.email) {
            alert('Please fill in your name and email')
            return
        }

        // Save to localStorage
        saveToLocalStorage(data)

        // Open email client
        sendEmail(data)

        // Show success modal
        setOpen(true)

        // Clear form
        setData({
            name: '',
            email: '',
            message: '',
            phone: '',
            pickupDate: '',
            returnDate: '',
            needsDriver: false
        })
    }

    return (
        <div id="booking-form" ref={formRef} className="bg-white rounded-2xl p-6 soft-shadow">
            <form onSubmit={submit} className="space-y-4">
                {data.carDetails && (
                    <div className="p-4 bg-[var(--accent)] rounded-xl">
                        <h3 className="font-semibold text-[var(--secondary)]">Selected Vehicle</h3>
                        <p className="mt-2 text-sm text-gray-600">{data.carDetails.name}</p>
                        <p className="mt-1 text-sm text-[var(--primary)]">
                            ${data.carDetails.priceUSD}/day ({data.carDetails.priceRWF.toLocaleString()} RWF)
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                        placeholder="Name"
                        required
                        value={data.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        required
                        value={data.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })}
                    />
                </div>

                <Input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={data.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, phone: e.target.value })}
                />

                {data.carDetails && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="pickup-date" className="block text-sm text-gray-700 mb-1">Pickup Date</label>
                            <Input
                                id="pickup-date"
                                type="date"
                                required
                                value={data.pickupDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, pickupDate: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="return-date" className="block text-sm text-gray-700 mb-1">Return Date</label>
                            <Input
                                id="return-date"
                                type="date"
                                required
                                value={data.returnDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, returnDate: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                <Textarea
                    placeholder={data.carDetails ? "Additional requirements or questions" : "Message"}
                    required
                    value={data.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...data, message: e.target.value })}
                    rows={4}
                />
                
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="needsDriver"
                        checked={data.needsDriver}
                        onChange={(e) => setData({ ...data, needsDriver: e.target.checked })}
                        className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                    />
                    <label htmlFor="needsDriver" className="ml-2 block text-sm text-gray-700">
                        I need a professional driver for this booking
                    </label>
                </div>

                <div className="mt-2 text-sm text-gray-500">
                    * Your email client will open to send this message
                </div>

                <div className="text-right">
                    <Button type="submit" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
                        {data.carDetails ? 'Send Booking Request' : 'Send Message'}
                    </Button>
                </div>
            </form>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center">
                    <h3 className="font-heading text-xl">
                        {data.carDetails ? 'Booking Request Sent' : 'Message Sent'}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600">
                        {data.carDetails
                            ? 'Your booking request has been sent. We will confirm availability and contact you shortly.'
                            : 'Your message has been sent to our team. We\'ll respond to you shortly.'}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        If your email client didn't open, please email us directly at ishifabrice3@gmail.com
                    </p>
                    <div className="mt-4">
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
