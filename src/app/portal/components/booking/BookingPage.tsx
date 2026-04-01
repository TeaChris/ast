'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Calendar from './Calendar'

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
]

const UNAVAILABLE_SLOTS = ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '3:30 PM']

export default function BookingPage() {
  return (
    <div className="space-y-12 font-comfortaa pb-32">
      {/* Page Header */}
      <div className="flex flex-col gap-8">
        <Link 
          href="/portal" 
          className="flex items-center gap-2 text-[#0B0E14] font-bold text-sm tracking-tight hover:text-[#ADB5BD] transition-all group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
        
        <div>
          <h1 className="text-3xl font-bold text-[#0B0E14]">Book an Appointment</h1>
          <p className="text-[#6C757D] mt-1 text-base">Schedule a meeting with faculty or staff</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Form Details */}
        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#0B0E14]">Appointment Details</h2>
            <p className="text-[#6C757D] text-sm mt-1">Select the type and purpose of your appointment</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0B0E14]">Appointment Type</label>
              <div className="relative group">
                <select className="w-full h-14 pl-5 pr-12 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] text-[#6C757D] appearance-none focus:outline-none focus:border-[#ADB5BD] transition-all font-medium">
                  <option>Select appointment type</option>
                  <option>Academic Advising</option>
                  <option>Career Counseling</option>
                  <option>Math Tutoring</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#ADB5BD]">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0B0E14]">Instructor/Staff Member</label>
              <div className="relative group">
                <select className="w-full h-14 pl-5 pr-12 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] text-[#6C757D] appearance-none focus:outline-none focus:border-[#ADB5BD] transition-all font-medium">
                  <option>Select instructor or staff member</option>
                  <option>Dr. Sarah Johnson</option>
                  <option>Ms. Emily Chen</option>
                  <option>Prof. Michael Davis</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#ADB5BD]">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0B0E14]">Additional Notes (Optional)</label>
              <textarea 
                className="w-full h-32 p-5 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] text-[#6C757D] focus:outline-none focus:border-[#ADB5BD] transition-all font-medium resize-none leading-relaxed"
                placeholder="Please describe the purpose of your appointment or any specific topics you'd like to discuss..."
              />
            </div>
          </div>
        </div>

        {/* Right Column: Date & Time Picker */}
        <div className="space-y-8">
          <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#0B0E14]">Select Date</h2>
              <p className="text-[#6C757D] text-sm mt-1">Choose your preferred date</p>
            </div>
            <Calendar />
          </div>

          <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#0B0E14]">Available Time Slots</h2>
              <p className="text-[#6C757D] text-sm mt-1 tracking-tight">
                4/1/2026 — <span className="font-semibold text-[#0B0E14]">Select your preferred time</span>
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {TIME_SLOTS.map((slot) => {
                const isUnavailable = UNAVAILABLE_SLOTS.includes(slot)
                return (
                  <button
                    key={slot}
                    disabled={isUnavailable}
                    className={cn(
                      "h-12 border rounded-xl font-bold text-xs transition-all uppercase tracking-widest",
                      isUnavailable 
                        ? "bg-[#F8F9FA] border-[#E9ECEF] text-[#DDE2E5] cursor-not-allowed" 
                        : "border-[#E9ECEF] text-[#6C757D] hover:bg-[#F8F9FA] hover:text-[#0B0E14] hover:border-[#ADB5BD]"
                    )}
                  >
                    {slot}
                  </button>
                )
              })}
            </div>
            <p className="text-[10px] text-[#ADB5BD] mt-6 flex items-center gap-2 font-medium">
              Gray slots are unavailable. All times are in your local timezone.
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Area */}
      <div className="fixed bottom-0 left-[280px] right-0 h-24 bg-white border-t border-[#E9ECEF] flex items-center justify-end px-12 z-40">
        <div className="flex items-center gap-3">
          <Link 
            href="/portal"
            className="px-8 py-3 rounded-xl border border-transparent text-[#6C757D] text-sm font-bold hover:bg-black/5 transition-colors"
          >
            Cancel
          </Link>
          <button className="px-8 py-3 rounded-xl bg-[#0B0E14] text-white text-sm font-bold shadow-lg shadow-black/10 hover:bg-[#1A1E26] transition-all">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
