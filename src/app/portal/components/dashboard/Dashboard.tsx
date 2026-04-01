'use client'

import React from 'react'
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  LayoutDashboard,
  User,
  AlertCircle,
  BookOpen,
  GraduationCap,
  Calculator
} from 'lucide-react'
import { cn } from '@/lib/utils'

const STATS = [
  {
    label: 'Upcoming',
    value: '3',
    subtext: 'Next 7 days',
    icon: Calendar,
  },
  {
    label: 'This Week',
    value: '5',
    subtext: 'Total appointments',
    icon: Clock,
  },
  {
    label: 'Pending',
    value: '1',
    subtext: 'Awaiting confirmation',
    icon: AlertCircle,
  },
  {
    label: 'Completed',
    value: '12',
    subtext: 'This semester',
    icon: User,
  }
]

const APPOINTMENTS = [
  {
    id: 'a1',
    title: 'Academic Advising',
    status: 'confirmed',
    provider: 'Dr. Sarah Johnson',
    date: '9/29/2025',
    time: '10:00 AM (30 min)',
    icon: BookOpen
  },
  {
    id: 'a2',
    title: 'Career Counseling',
    status: 'pending',
    provider: 'Ms. Emily Chen',
    date: '10/1/2025',
    time: '2:30 PM (45 min)',
    icon: GraduationCap
  },
  {
    id: 'a3',
    title: 'Math Tutoring',
    status: 'confirmed',
    provider: 'Prof. Michael Davis',
    date: '10/3/2025',
    time: '11:00 AM (60 min)',
    icon: Calculator
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B0E14]">Dashboard</h1>
          <p className="text-[#6C757D] mt-1 text-base">Welcome back! Here&apos;s your schedule overview.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#DDE2E5] bg-white text-[#0B0E14] font-semibold text-sm hover:bg-[#F8F9FA] transition-colors">
            <Calendar size={18} />
            View Calendar
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B0E14] text-white font-semibold text-sm hover:bg-[#1A1E26] transition-colors">
            <Clock size={18} />
            Book Appointment
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-[#E9ECEF] flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[#6C757D] text-sm font-medium tracking-tight">{stat.label}</span>
              <stat.icon size={20} className="text-[#ADB5BD]" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[#0B0E14] leading-none">{stat.value}</span>
              <p className="text-[#6C757D] text-[12px] mt-2 font-medium">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white/50 backdrop-blur-sm border border-[#E9ECEF] rounded-[32px] p-8 overflow-hidden">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#0B0E14]">Upcoming Appointments</h2>
          <p className="text-[#6C757D] text-sm mt-1">Your scheduled meetings and sessions</p>
        </div>

        <div className="space-y-4">
          {APPOINTMENTS.map((app) => (
            <div key={app.id} className="bg-white border border-[#E9ECEF] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-sm transition-all duration-300 group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-[#F2F4F7] rounded-full text-[#6C757D] group-hover:bg-[#E9ECEF] transition-colors">
                  <app.icon size={22} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-[17px] font-bold text-[#0B0E14]">{app.title}</h4>
                    <span className={cn(
                      "px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-tight leading-none border",
                      app.status === 'confirmed' 
                        ? "bg-[#E6F4EA] border-[#B7E1CD] text-[#1E7E34]" 
                        : "bg-[#FFF4E5] border-[#FFE2B8] text-[#B76F00]"
                    )}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-[#6C757D] text-sm font-medium">{app.provider}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 pt-2">
                    <div className="flex items-center gap-2 text-[#ADB5BD] text-sm">
                      <Calendar size={14} />
                      <span className="text-[#6C757D] text-[13px]">{app.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#ADB5BD] text-sm">
                       <Clock size={14} />
                       <span className="text-[#6C757D] text-[13px]">{app.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-6 py-2.5 rounded-xl border border-[#DDE2E5] bg-white text-[#0B0E14] text-sm font-bold hover:bg-[#F8F9FA] transition-colors">
                  Reschedule
                </button>
                <button className="px-6 py-2.5 rounded-xl border border-transparent text-[#0B0E14] text-sm font-bold hover:bg-black/5 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
