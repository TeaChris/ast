'use client'

import React from 'react'
import { 
  LayoutDashboard, 
  PlusCircle, 
  Calendar, 
  ListOrdered, 
  User
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePortalStore } from '@/lib/store/usePortalStore'

const NAV_LINKS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'book', label: 'Book Appointment', icon: PlusCircle },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'history', label: 'My Appointments', icon: ListOrdered },
  { id: 'profile', label: 'Profile', icon: User },
]

const QUICK_STATS = [
  { label: 'This Week', value: 3 },
  { label: 'This Month', value: 12 },
  { label: 'Total', value: 24 },
]

export default function Sidebar() {
  const { currentView, setView } = usePortalStore()

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-white text-[#0B0E14] flex flex-col p-6 z-50 overflow-y-auto no-scrollbar border-r border-[#E9ECEF] font-comfortaa">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 bg-[#0B0E14] rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-[2px]" />
        </div>
        <span className="font-bold text-lg tracking-tight text-[#0B0E14]">Dashboard</span>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_LINKS.map((link) => {
          const isActive = currentView === link.id || (link.id === 'dashboard' && currentView === 'dashboard')
          return (
            <button
              key={link.id}
              onClick={() => setView(link.id as 'dashboard' | 'discovery' | 'history')}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-[#0B0E14] text-white font-semibold shadow-lg shadow-black/10" 
                  : "text-[#0B0E14]/60 hover:text-[#0B0E14] hover:bg-[#F8F9FA]"
              )}
            >
              <link.icon size={20} className={cn(isActive ? "text-white" : "text-[#ADB5BD]")} />
              <span className="text-sm">{link.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Secondary Widgets */}
      <div className="mt-auto space-y-6 pt-10">
        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-5 border border-[#E9ECEF] shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#ADB5BD] mb-4">Quick Stats</h4>
          <div className="space-y-3">
            {QUICK_STATS.map((stat) => (
              <div key={stat.label} className="flex justify-between items-center text-sm">
                <span className="text-[#6C757D] font-medium">{stat.label}</span>
                <span className="font-bold text-[#0B0E14]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-[#E9F3FF] rounded-2xl p-5 border border-[#D1E9FF]/20 relative overflow-hidden group hover:shadow-md transition-all duration-300">
          <h4 className="text-[#0B4D92] font-bold text-sm mb-1 relative z-10">Need Help?</h4>
          <p className="text-[#0B4D92]/80 text-[11px] leading-relaxed mb-4 relative z-10 font-medium">
            Check our FAQ or contact support for assistance with appointments.
          </p>
          <button className="w-full bg-white text-[#0B4D92] py-2.5 rounded-xl text-xs font-bold border border-[#0B4D92]/10 hover:shadow-sm transition-all relative z-10">
            View Help Center
          </button>
        </div>
      </div>
    </aside>
  )
}
