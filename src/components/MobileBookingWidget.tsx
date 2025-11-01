import React, { useState } from 'react'
import { Button, Input } from './ui'
import { useNavigate } from 'react-router-dom'

export default function MobileBookingWidget() {
  const navigate = useNavigate()
  const [pickupLocation, setPickupLocation] = useState('Kigali Airport')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [minSeats, setMinSeats] = useState('')
  const [transmission, setTransmission] = useState('')
  const [fuel, setFuel] = useState('')

  const startSearch = () => {
    const params = new URLSearchParams()
    if (pickupLocation) params.set('pickup', pickupLocation)
    if (pickupDate) params.set('pickupDate', pickupDate)
    if (returnDate) params.set('returnDate', returnDate)
    if (minSeats) params.set('minSeats', minSeats)
    if (transmission) params.set('transmission', transmission)
    if (fuel) params.set('fuel', fuel)
    navigate(`/cars?${params.toString()}`)
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 sm:static sm:px-0">
      <div className="bg-white rounded-2xl p-4 soft-shadow border border-gray-100 sm:max-w-xl sm:mx-auto">
        <div className="text-sm text-gray-700 mb-2">Quick Booking</div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label htmlFor="pickupLocation" className="block text-xs text-gray-500 mb-1">Pick-up Location</label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full h-11 rounded-xl border border-gray-200 px-3"
            >
              <option>Kigali Airport</option>
              <option>Kigali Downtown</option>
              <option>Musanze</option>
              <option>Rubavu</option>
              <option>Huye</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="pickupDate" className="block text-xs text-gray-500 mb-1">Pick-up Date</label>
              <Input id="pickupDate" type="date" value={pickupDate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPickupDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="returnDate" className="block text-xs text-gray-500 mb-1">Return Date</label>
              <Input id="returnDate" type="date" value={returnDate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnDate(e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Seats</label>
              <select value={minSeats} onChange={(e) => setMinSeats(e.target.value)} className="w-full h-11 rounded-xl border border-gray-200 px-3">
                <option value="">Any</option>
                <option value="5">5+</option>
                <option value="7">7+</option>
                <option value="12">12+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Transmission</label>
              <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className="w-full h-11 rounded-xl border border-gray-200 px-3">
                <option value="">Any</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Fuel</label>
              <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="w-full h-11 rounded-xl border border-gray-200 px-3">
                <option value="">Any</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <Button onClick={startSearch} style={{ backgroundColor: 'var(--primary)', color: '#fff' }} className="h-12 rounded-xl w-full">
            Find Available Cars
          </Button>
        </div>
      </div>
    </div>
  )
}