'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(1) // Mocking April 1st as selected

  // Simple mock for April 2026
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1)
  const paddingDays = [29, 30, 31] // Mocking previous month days

  return (
    <div className="bg-white border border-[#E9ECEF] rounded-2xl p-6 font-comfortaa">
      <div className="flex items-center justify-between mb-8 px-2">
        <button className="p-1.5 hover:bg-[#F8F9FA] rounded-lg text-[#ADB5BD] hover:text-[#0B0E14] transition-all">
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-bold text-[#0B0E14]">April 2026</h3>
        <button className="p-1.5 hover:bg-[#F8F9FA] rounded-lg text-[#ADB5BD] hover:text-[#0B0E14] transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {DAYS.map((day) => (
          <div key={day} className="text-[#ADB5BD] text-xs font-bold py-2 uppercase tracking-tighter">
            {day}
          </div>
        ))}
        
        {/* Padding Days */}
        {paddingDays.map((day) => (
          <div key={`prev-${day}`} className="text-[#DDE2E5] text-sm py-3">
            {day}
          </div>
        ))}

        {/* Current Month Days */}
        {daysInMonth.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            className={cn(
              "text-sm py-3 rounded-xl transition-all relative group flex items-center justify-center mx-auto w-10 h-10",
              selectedDate === day 
                ? "bg-[#0B0E14] text-white font-bold" 
                : "text-[#6C757D] hover:bg-[#F8F9FA] hover:text-[#0B0E14]"
            )}
          >
            {day}
          </button>
        ))}

        {/* Next Month Padding */}
        {[1, 2].map((day) => (
          <div key={`next-${day}`} className="text-[#DDE2E5] text-sm py-3">
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
