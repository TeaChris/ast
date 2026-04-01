'use client'

import React from 'react'
import { Calendar, LogOut } from 'lucide-react'

export default function PortalTopBar() {
  return (
    <header className="h-16 w-full bg-white border-b border-[#E9ECEF] flex items-center justify-between px-8 z-50 font-comfortaa">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <div className="text-[#0B0E14]">
          <Calendar size={24} strokeWidth={2.5} />
        </div>
        <span className="font-bold text-lg text-[#0B0E14] tracking-tight">
          University Appointment System
        </span>
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium text-[#6C757D]">
          Welcome, <span className="text-[#0B0E14] font-semibold">John Doe</span>
        </span>
        <button className="text-[#6C757D] hover:text-[#0B0E14] transition-colors p-1.5 hover:bg-[#F8F9FA] rounded-lg">
          <LogOut size={20} />
        </button>
      </div>
    </header>
  )
}
