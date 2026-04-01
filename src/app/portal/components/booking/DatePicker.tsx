'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DatePicker() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const totalDays = daysInMonth(year, month);
  const firstDay = firstDayOfMonth(year, month);

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });

  const days = [];
  // Add empty slots for the first week
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  // Add the actual days
  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(year, month, d);
    const isSelected = selectedDate?.toDateString() === date.toDateString();
    const isToday = new Date().toDateString() === date.toDateString();

    days.push(
      <button
        key={d}
        onClick={() => setSelectedDate(date)}
        className={cn(
          'relative w-12 h-12 flex items-center justify-center rounded-2xl text-sm font-medium transition-all duration-300',
          isSelected ? 'text-obsidian z-10' : 'text-cream/50 hover:text-gold hover:bg-gold/5',
          isToday && !isSelected && 'text-gold'
        )}
      >
        {d}
        {isSelected && (
          <motion.div
            layoutId="date-glow"
            className="absolute inset-0 bg-gold rounded-2xl -z-10 shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
          />
        )}
      </button>
    );
  }

  return (
    <div className="bg-obsidian-surface/40 border border-gold/10 p-8 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl font-comfortaa text-cream mb-12">
          {monthName} <span className="italic text-gold/60">{year}</span>
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentMonth(new Date(year, month - 1))}
            className="p-2 text-gold/50 hover:text-gold transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="p-2 text-gold/50 hover:text-gold transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="w-12 h-8 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest text-gold/30">
            {day}
          </div>
        ))}
        {days}
      </div>
    </div>
  );
}
