'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
      Calendar,
      Clock,
      MapPin,
      ChevronRight,
      RefreshCw,
      Box,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface HistoryItem {
      id: string
      name: string
      status: string
      date: string
      time: string
      provider: string
      price: number
      image: string
}

const HISTORY: HistoryItem[] = [
      {
            id: 'h1',
            name: 'Deep Obsidian Reset',
            status: 'Upcoming',
            date: 'April 12, 2026',
            time: '02:00 PM',
            provider: 'Elena Rodriguez',
            price: 220,
            image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974',
      },
      {
            id: 'h2',
            name: 'Zen Harmony Massage',
            status: 'Completed',
            date: 'March 28, 2026',
            time: '11:00 AM',
            provider: 'Marcus Chen',
            price: 140,
            image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
      },
]

export default function BookingHistory() {
      const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>(
            'upcoming',
      )

      const filteredHistory = HISTORY.filter((item) =>
            activeTab === 'upcoming'
                  ? item.status === 'Upcoming'
                  : item.status === 'Completed',
      )

      return (
            <div className="px-8 pb-32 min-h-screen">
                  <div className="max-w-4xl mx-auto">
                        {/* Tabs */}
                        <div className="flex gap-12 border-b border-gold/10 mb-16">
                              {(['upcoming', 'past'] as const).map((tab) => (
                                    <button
                                          key={tab}
                                          onClick={() => setActiveTab(tab)}
                                          className={cn(
                                                'relative pb-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300',
                                                activeTab === tab
                                                      ? 'text-gold'
                                                      : 'text-cream/30 hover:text-cream/50',
                                          )}
                                    >
                                          {tab} Appointments
                                          {activeTab === tab && (
                                                <motion.div
                                                      layoutId="tab-underline"
                                                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold shadow-[0_0_10px_var(--gold)]"
                                                />
                                          )}
                                    </button>
                              ))}
                        </div>

                        {/* Timeline View */}
                        <div className="relative space-y-8">
                              <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gold/10 -z-10" />

                              <AnimatePresence mode="wait">
                                    {filteredHistory.length > 0 ? (
                                          <motion.div
                                                key={activeTab}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="space-y-12"
                                          >
                                                {filteredHistory.map(
                                                      (item, index) => (
                                                            <ActivityCard
                                                                  key={item.id}
                                                                  item={item}
                                                                  index={index}
                                                            />
                                                      ),
                                                )}
                                          </motion.div>
                                    ) : (
                                          <EmptyState key="empty" />
                                    )}
                              </AnimatePresence>
                        </div>
                  </div>
            </div>
      )
}

function ActivityCard({ item, index }: { item: HistoryItem; index: number }) {
      const isPast = item.status === 'Completed'

      return (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={cn(
                        'group relative flex items-start gap-12 p-8 rounded-[40px] border border-gold/10 bg-obsidian-surface/40 transition-all duration-500 hover:bg-gold/5 hover:border-gold/30',
                        isPast && 'grayscale-[0.8] hover:grayscale-0',
                  )}
            >
                  {/* Date Marker */}
                  <div className="relative z-10 flex flex-col items-center gap-4 py-2">
                        <div
                              className={cn(
                                    'w-5 h-5 rounded-full border-2 bg-obsidian flex items-center justify-center',
                                    item.status === 'Upcoming'
                                          ? 'border-gold shadow-[0_0_15px_var(--gold)]'
                                          : 'border-gold/30',
                              )}
                        >
                              {item.status === 'Upcoming' && (
                                    <motion.div
                                          animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                          }}
                                          transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                          }}
                                          className="absolute w-10 h-10 bg-gold/20 rounded-full"
                                    />
                              )}
                        </div>
                        <div className="h-full w-px bg-gold/10" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-48 h-48 rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative">
                              <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-2">
                              <div>
                                    <div className="flex justify-between items-start mb-4">
                                          <h4
                                                className={cn(
                                                      'text-2xl font-comfortaa',
                                                      item.status === 'Upcoming'
                                                            ? 'text-cream'
                                                            : 'text-cream/70',
                                                )}
                                          >
                                                {item.name}
                                          </h4>
                                          <span
                                                className={cn(
                                                      'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none border',
                                                      item.status === 'Upcoming'
                                                            ? 'bg-gold/10 border-gold/30 text-gold'
                                                            : 'bg-white/5 border-white/10 text-cream/40',
                                                )}
                                          >
                                                {item.status}
                                          </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-4">
                                          <div className="flex items-center gap-3 text-cream/40 text-[11px] uppercase tracking-widest font-bold">
                                                <Calendar
                                                      size={14}
                                                      className="text-gold/50"
                                                />{' '}
                                                {item.date}
                                          </div>
                                          <div className="flex items-center gap-3 text-cream/40 text-[11px] uppercase tracking-widest font-bold">
                                                <Clock
                                                      size={14}
                                                      className="text-gold/50"
                                                />{' '}
                                                {item.time}
                                          </div>
                                          <div className="flex items-center gap-3 text-cream/40 text-[11px] uppercase tracking-widest font-bold">
                                                <MapPin
                                                      size={14}
                                                      className="text-gold/50"
                                                />{' '}
                                                Aura West End
                                          </div>
                                          <div className="flex items-center gap-3 text-cream/40 text-[11px] uppercase tracking-widest font-bold">
                                                <RefreshCw
                                                      size={14}
                                                      className="text-gold/50"
                                                />{' '}
                                                ${item.price}
                                          </div>
                                    </div>
                              </div>

                              <div className="mt-8 flex gap-4">
                                    <motion.button
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          className="flex-1 flex items-center justify-center gap-2 bg-gold text-obsidian px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                                    >
                                          {item.status === 'Upcoming'
                                                ? 'Reschedule Appointment'
                                                : 'Book Again'}
                                          <ChevronRight size={14} />
                                    </motion.button>

                                    <motion.button
                                          whileHover={{
                                                scale: 1.05,
                                                backgroundColor:
                                                      'rgba(212,175,55,0.1)',
                                          }}
                                          className="px-6 py-3 rounded-2xl border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest transition-all"
                                    >
                                          Details
                                    </motion.button>
                              </div>
                        </div>
                  </div>
            </motion.div>
      )
}

function EmptyState() {
      return (
            <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
            >
                  <div className="relative mb-12">
                        <div className="w-32 h-32 bg-gold/5 rounded-[40px] flex items-center justify-center border border-gold/10">
                              <Box className="w-16 h-16 text-gold/20" />
                        </div>
                        <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                              }}
                              className="absolute inset-0 border border-gold/5 rounded-[40px]"
                        />
                  </div>
                  <h3 className="text-3xl font-comfortaa text-cream mb-4">
                        No Previous Aura Found
                  </h3>
                  <p className="text-cream/40 text-sm max-w-sm mb-12 font-light leading-relaxed">
                        Your history is currently a blank canvas. Begin your
                        journey toward serenity by booking your first elite
                        experience.
                  </p>
                  <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold text-obsidian px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all"
                  >
                        Explore Discovery
                  </motion.button>
            </motion.div>
      )
}
