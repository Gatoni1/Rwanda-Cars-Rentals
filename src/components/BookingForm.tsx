import React, { useState } from 'react'
import { Input, Button, Modal } from './ui'

export default function BookingForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', pickup: '', start: '', end: '' })
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    const submit = (e: any) => {
        e.preventDefault()
        // Basic validation
        if (!form.name || !form.email) return alert('Please provide name and email')
        setSuccess(true)
        setOpen(true)
        setForm({ name: '', email: '', phone: '', pickup: '', start: '', end: '' })
    }

    return (
        <div>
            <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Name" value={form.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })} />
                <Input placeholder="Email" type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Phone" value={form.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, phone: e.target.value })} />
                <Input placeholder="Pickup location" value={form.pickup} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, pickup: e.target.value })} />
                <Input placeholder="Start date/time" value={form.start} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, start: e.target.value })} />
                <Input placeholder="End date/time" value={form.end} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, end: e.target.value })} />
                <div className="sm:col-span-2">
                    <Button style={{ backgroundColor: 'var(--primary)', color: '#fff' }} type="submit">Request Booking</Button>
                </div>
            </form>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center">
                    <h3 className="font-heading text-xl">{success ? 'Booking Sent' : 'Something went wrong'}</h3>
                    <p className="mt-3 text-sm text-gray-600">We received your request. Our team will contact you shortly.</p>
                    <div className="mt-4"><Button onClick={() => setOpen(false)}>Close</Button></div>
                </div>
            </Modal>
        </div>
    )
}
