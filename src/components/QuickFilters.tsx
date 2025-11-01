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
    <div className="sticky top-20 bg-white z-10 py-2">
      <div className="flex gap-2 overflow-x-auto no-scrollbar px-1">
        {chips.seats.map((c) => (
          <button
            key={`seats-${c.value}`}
            onClick={() => updateParam('minSeats', c.value)}
            className={`px-3 h-9 rounded-full border text-sm whitespace-nowrap ${current.minSeats === c.value ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-gray-200 text-gray-700 bg-white'}`}
          >
            {c.label}
          </button>
        ))}
        {chips.transmission.map((c) => (
          <button
            key={`trans-${c.value}`}
            onClick={() => updateParam('transmission', c.value)}
            className={`px-3 h-9 rounded-full border text-sm whitespace-nowrap ${current.transmission === c.value ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-gray-200 text-gray-700 bg-white'}`}
          >
            {c.label}
          </button>
        ))}
        {chips.fuel.map((c) => (
          <button
            key={`fuel-${c.value}`}
            onClick={() => updateParam('fuel', c.value)}
            className={`px-3 h-9 rounded-full border text-sm whitespace-nowrap ${current.fuel === c.value ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-gray-200 text-gray-700 bg-white'}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}