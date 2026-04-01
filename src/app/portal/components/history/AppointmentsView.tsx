'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
      ChevronLeft,
      Search,
      Filter,
      Calendar as CalendarIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import CustomSelect from '../booking/CustomSelect'

const STATUS_OPTIONS = ['All Status', 'Confirmed', 'Pending', 'Cancelled']
const TYPE_OPTIONS = [
      'All Types',
      'Academic Advising',
      'Career Counseling',
      'Math Tutoring',
]

export default function AppointmentsView() {
      const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>(
            'upcoming',
      )
      const [status, setStatus] = useState('All Status')
      const [type, setType] = useState('All Types')

      return (
            <div className="space-y-12 font-comfortaa pb-32">
                  {/* Header Section */}
                  <div className="flex flex-col gap-8">
                        <Link
                              href="/portal"
                              className="flex items-center gap-2 text-[#0B0E14] font-bold text-sm tracking-tight hover:text-[#ADB5BD] transition-all group w-fit"
                        >
                              <ChevronLeft
                                    size={18}
                                    className="group-hover:-translate-x-1 transition-transform"
                              />
                              Back to Dashboard
                        </Link>

                        <div>
                              <h1 className="text-3xl font-bold text-[#0B0E14]">
                                    All Appointments
                              </h1>
                              <p className="text-[#6C757D] mt-1 text-base font-medium">
                                    View and manage all your appointments
                              </p>
                        </div>
                  </div>

                  {/* Filter Section */}
                  <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-8 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                              <Filter size={18} className="text-[#0B0E14]" />
                              <h3 className="font-bold text-[#0B0E14] text-sm">
                                    Filters
                              </h3>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4">
                              <div className="flex-1 relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#ADB5BD]">
                                          <Search size={18} />
                                    </div>
                                    <input
                                          type="text"
                                          placeholder="Search appointments, instructors, or locations..."
                                          className="w-full h-14 pl-12 pr-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                    />
                              </div>

                              <div className="w-full lg:w-48">
                                    <CustomSelect
                                          options={STATUS_OPTIONS}
                                          value={status}
                                          onChange={setStatus}
                                          placeholder="All Status"
                                    />
                              </div>

                              <div className="w-full lg:w-48">
                                    <CustomSelect
                                          options={TYPE_OPTIONS}
                                          value={type}
                                          onChange={setType}
                                          placeholder="All Types"
                                    />
                              </div>
                        </div>
                  </div>

                  {/* Tab Management */}
                  <div className="flex items-center gap-2">
                        <button
                              onClick={() => setActiveTab('upcoming')}
                              className={cn(
                                    'px-6 py-2.5 rounded-full text-xs font-bold transition-all',
                                    activeTab === 'upcoming'
                                          ? 'bg-[#0B0E14] text-white'
                                          : 'bg-[#F2F4F7] text-[#6C757D] hover:bg-[#E9ECEF]',
                              )}
                        >
                              Upcoming (0)
                        </button>
                        <button
                              onClick={() => setActiveTab('past')}
                              className={cn(
                                    'px-6 py-2.5 rounded-full text-xs font-bold transition-all',
                                    activeTab === 'past'
                                          ? 'bg-[#0B0E14] text-white'
                                          : 'bg-[#F2F4F7] text-[#6C757D] hover:bg-[#E9ECEF]',
                              )}
                        >
                              Past (6)
                        </button>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm min-h-[400px]">
                        <div className="mb-10">
                              <h2 className="text-xl font-bold text-[#0B0E14]">
                                    Upcoming Appointments
                              </h2>
                              <p className="text-[#6C757D] text-sm mt-1 font-medium">
                                    Your scheduled appointments that
                                    haven&apos;t occurred yet
                              </p>
                        </div>

                        {/* Empty State */}
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                              <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 text-[#DDE2E5]">
                                    <CalendarIcon size={32} strokeWidth={1.5} />
                              </div>
                              <p className="text-[#ADB5BD] text-sm font-medium">
                                    No upcoming appointments found
                              </p>
                        </div>
                  </div>
            </div>
      )
}
