import React from 'react'
import { useSearchParams } from 'react-router-dom'

const chips = {
  categories: [
    { label: 'All', key: 'all' },
    { label: 'SUV', key: 'SUV' }, // placeholder; using seats/transmission/fuel as functional filters
  ],
  seats: [
    { label: 'Any', value: '' },
    { label: '5+', value: '5' },
    { label: '7+', value: '7' },
    { label: '12+', value: '12' }
  ],
  transmission: [
    { label: 'Any', value: '' },
    { label: 'Auto', value: 'Automatic' },
    { label: 'Manual', value: 'Manual' }
  ],
  fuel: [
    { label: 'Any', value: '' },
    { label: 'Petrol', value: 'Petrol' },
    { label: 'Diesel', value: 'Diesel' },
    { label: 'Hybrid', value: 'Hybrid' }
  ]
}

export default function QuickFilters() {
  const [params, setParams] = useSearchParams()

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString())
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const current = {
    minSeats: params.get('minSeats') || '',
    transmission: params.get('transmission') || '',
    fuel: params.get('fuel') || ''
  }

  return (
    <div className="sticky top-20 bg-white z-10 py-4">
      <div className="grid grid-cols-3 gap-2 px-4">
        <div>
          <label htmlFor="seats-filter" className="block text-xs text-gray-500 mb-1">Seats</label>
          <select
            id="seats-filter"
            value={current.minSeats}
            onChange={(e) => updateParam('minSeats', e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-200 px-2 text-sm"
          >
            {chips.seats.map((c) => (
              <option key={`seats-${c.value}`} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="transmission-filter" className="block text-xs text-gray-500 mb-1">Transmission</label>
          <select
            id="transmission-filter"
            value={current.transmission}
            onChange={(e) => updateParam('transmission', e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-200 px-2 text-sm"
          >
            {chips.transmission.map((c) => (
              <option key={`transmission-${c.value}`} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="fuel-filter" className="block text-xs text-gray-500 mb-1">Fuel Type</label>
          <select
            id="fuel-filter"
            value={current.fuel}
            onChange={(e) => updateParam('fuel', e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-200 px-2 text-sm"
          >
            {chips.fuel.map((c) => (
              <option key={`fuel-${c.value}`} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}