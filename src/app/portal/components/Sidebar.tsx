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
    <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-[#0B0E14] text-white flex flex-col p-6 z-50 overflow-y-auto no-scrollbar">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white/80 rounded-[2px]" />
        </div>
        <span className="font-semibold text-lg tracking-tight">Dashboard</span>
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
                  ? "bg-white text-black font-semibold" 
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon size={20} className={cn(isActive ? "text-black" : "text-white/40")} />
              <span className="text-sm">{link.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Secondary Widgets */}
      <div className="mt-auto space-y-6 pt-10">
        {/* Quick Stats */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">Quick Stats</h4>
          <div className="space-y-3">
            {QUICK_STATS.map((stat) => (
              <div key={stat.label} className="flex justify-between items-center text-sm">
                <span className="text-white/50 font-light">{stat.label}</span>
                <span className="font-medium text-white/90">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-[#E9F3FF] rounded-2xl p-5 border border-[#D1E9FF]/20 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <h4 className="text-[#0B4D92] font-bold text-sm mb-1 relative z-10">Need Help?</h4>
          <p className="text-[#0B4D92]/60 text-[11px] leading-relaxed mb-4 relative z-10">
            Check our FAQ or contact support for assistance with appointments.
          </p>
          <button className="w-full bg-white text-[#0B4D92] py-2.5 rounded-xl text-xs font-bold border border-[#0B4D92]/10 hover:shadow-md transition-all relative z-10">
            View Help Center
          </button>
        </div>
      </div>
    </aside>
  )
}
