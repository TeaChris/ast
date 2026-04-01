'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const DAYS_HEADER = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Mocking April 2026
const APRIL_DAYS = Array.from({ length: 30 }, (_, i) => i + 1)
const PADDING_DAYS = [29, 30, 31] // Previous month (March) days to fill Sunday context

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(1)

  return (
    <div className="space-y-12 font-comfortaa pb-32">
      {/* Header Section */}
      <div className="flex flex-col gap-8">
        <Link 
          href="/portal" 
          className="flex items-center gap-2 text-[#0B0E14] font-bold text-sm tracking-tight hover:text-[#ADB5BD] transition-all group w-fit"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
        
        <div>
          <h1 className="text-3xl font-bold text-[#0B0E14]">Calendar View</h1>
          <p className="text-[#6C757D] mt-1 text-base font-medium">View and manage your appointments</p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: Main Calendar Grid (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="text-[#0B0E14]">
                <CalendarIcon size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold text-[#0B0E14]">April 2026</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 aspect-square rounded-xl border border-[#E9ECEF] hover:bg-[#F8F9FA] transition-all text-[#ADB5BD] hover:text-[#0B0E14]">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 aspect-square rounded-xl border border-[#E9ECEF] hover:bg-[#F8F9FA] transition-all text-[#ADB5BD] hover:text-[#0B0E14]">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Days Week Headers */}
          <div className="grid grid-cols-7 mb-4">
            {DAYS_HEADER.map((day) => (
              <div key={day} className="text-center font-bold text-[#ADB5BD] text-xs py-4 uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>

          {/* Date Grid */}
          <div className="grid grid-cols-7 gap-3">
            {/* Previous Month Padding */}
            {PADDING_DAYS.map((day) => (
              <div key={`prev-${day}`} className="aspect-square flex items-center justify-center text-[#DDE2E5] text-lg font-medium opacity-50">
                {day}
              </div>
            ))}

            {/* Current Month Days */}
            {APRIL_DAYS.map((day) => {
              const isSelected = selectedDate === day
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "aspect-square flex items-start p-4 text-lg font-semibold rounded-[24px] border transition-all duration-300 relative",
                    isSelected 
                      ? "bg-[#EEF6FF] border-[#3B82F6] text-[#3B82F6] shadow-sm" 
                      : "bg-[#FBFBFC] border-transparent text-[#6C757D] hover:bg-white hover:border-[#E9ECEF] hover:shadow-md hover:text-[#0B0E14]"
                  )}
                >
                  <span className="relative z-10">{day}</span>
                  {/* Dot indicator if appointments existed (Mocked) */}
                  {(day === 5 || day === 12 || day === 19) && !isSelected && (
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#ADB5BD] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Appointment Sidebar */}
        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-8 shadow-sm h-fit">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0B0E14]">Select a Date</h3>
            <p className="text-[#6C757D] text-sm mt-1 font-medium">Click on a date to view appointments</p>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 text-[#DDE2E5]">
              <CalendarIcon size={32} strokeWidth={1.5} />
            </div>
            <p className="text-[#ADB5BD] text-sm max-w-[180px] font-medium leading-relaxed">
              Click on a date to view appointments
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
