'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  CircleDashed, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  History
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePortalStore } from '@/lib/store/usePortalStore'
import Image from 'next/image'

const METRICS = [
  {
    id: 'm1',
    label: 'Upcoming',
    value: '3',
    subtext: 'Next 7 days',
    icon: Calendar,
    color: 'text-gold'
  },
  {
    id: 'm2',
    label: 'This Week',
    value: '5',
    subtext: 'Total sessions',
    icon: Sparkles,
    color: 'text-gold-light'
  },
  {
    id: 'm3',
    label: 'Pending',
    value: '1',
    subtext: 'Awaiting confirmation',
    icon: CircleDashed,
    color: 'text-cream/40'
  },
  {
    id: 'm4',
    label: 'Completed',
    value: '12',
    subtext: 'This semester',
    icon: CheckCircle2,
    color: 'text-gold/60'
  }
]

const UPCOMING_EXPERIENCES = [
  {
    id: 'e1',
    name: 'The Aura Signature',
    status: 'Confirmed',
    provider: 'Elena Rodriguez',
    date: 'Apr 12',
    time: '02:00 PM',
    type: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2070'
  },
  {
    id: 'e2',
    name: 'Zen Harmony Massage',
    status: 'Pending',
    provider: 'Marcus Chen',
    date: 'Apr 15',
    time: '11:00 AM',
    type: 'Relaxation',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070'
  },
  {
    id: 'e3',
    name: 'Deep Obsidian Reset',
    status: 'Confirmed',
    provider: 'Elena Rodriguez',
    date: 'Apr 19',
    time: '04:30 PM',
    type: 'Recovery',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974'
  }
]

export default function Dashboard() {
  const { setView } = usePortalStore()

  return (
    <div className="px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Serenity Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-obsidian-surface/40 backdrop-blur-xl border border-gold/10 p-8 rounded-[32px] group hover:border-gold/30 hover:bg-gold/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={cn("p-3 rounded-2xl bg-gold/5 border border-gold/10", metric.color)}>
                  <metric.icon size={20} />
                </div>
                <button className="text-gold/20 group-hover:text-gold transition-colors">
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-serif text-cream block">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold/60">{metric.label}</span>
                <p className="text-xs text-cream/30 pt-1">{metric.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Upcoming List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-2xl font-serif text-cream">Incoming Experiences</h2>
              <button 
                onClick={() => setView('history')}
                className="text-[10px] uppercase tracking-widest font-bold text-gold/40 hover:text-gold transition-colors flex items-center gap-2"
              >
                View full timeline <ChevronRight size={12} />
              </button>
            </div>

            <div className="space-y-4">
              {UPCOMING_EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.8 }}
                  className="group relative flex items-center gap-6 p-4 rounded-[32px] border border-gold/5 bg-obsidian-surface/20 hover:border-gold/20 hover:bg-gold-[2%] transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/5 shrink-0 relative">
                    <Image 
                      src={exp.image} 
                      alt={exp.name} 
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest leading-none border",
                          exp.status === 'Confirmed' ? "bg-gold/10 border-gold/30 text-gold" : "bg-white/5 border-white/10 text-cream/40"
                        )}>
                          {exp.status}
                        </span>
                        <span className="text-[10px] text-gold/40 uppercase tracking-widest font-bold">{exp.type}</span>
                      </div>
                      <h4 className="text-lg font-serif text-cream group-hover:text-gold transition-colors">{exp.name}</h4>
                      <p className="text-xs text-cream/40 font-light italic">with {exp.provider}</p>
                    </div>

                    <div className="flex items-center gap-8 pr-4">
                      <div className="flex flex-col items-end">
                        <span className="text-cream text-sm font-medium">{exp.date}</span>
                        <div className="flex items-center gap-1.5 text-cream/30 text-[10px] uppercase tracking-tighter">
                          <Clock size={10} /> {exp.time}
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar / Quick Stats */}
          <div className="space-y-8">
            <div className="bg-linear-to-br from-gold/10 to-transparent border border-gold/20 rounded-[40px] p-8 overflow-hidden relative group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <ShieldCheck className="text-gold mb-6" size={32} />
                <h3 className="text-xl font-serif text-cream mb-2">Member Serene Status</h3>
                <p className="text-sm text-cream/40 font-light mb-8 leading-relaxed">
                  You are among the top 15% of members maintaining a consistent wellness routine this quarter.
                </p>
                <div className="w-full h-1 bg-gold/10 rounded-full mb-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-linear-to-r from-gold/40 to-gold"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-gold">85% Tranquility Score</span>
                  <span className="text-cream/20">Gold Tier</span>
                </div>
              </div>
            </div>

            <div className="bg-obsidian-surface/40 backdrop-blur-xl border border-gold/10 rounded-[40px] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-gold/60 mb-6 flex items-center gap-2">
                <History size={14} /> Concierge Assistance
              </h3>
              <div className="space-y-6">
                <p className="text-xs text-cream/50 leading-relaxed font-light">
                  Need to tailor your next experience? Our dedicated concierge is available 24/7 for bespoke requests.
                </p>
                <button className="w-full py-4 bg-gold/5 border border-gold/20 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold text-gold hover:bg-gold/10 transition-all">
                  Contact Concierge
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
