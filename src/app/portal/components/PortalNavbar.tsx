'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, User, Calendar, Search, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePortalStore } from '@/lib/store/usePortalStore';

export default function PortalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { currentView, setView } = usePortalStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-8 py-4',
        isScrolled 
          ? 'backdrop-blur-xl bg-obsidian/40 border-b border-gold/10 py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setView('discovery')}
        >
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <span className="text-obsidian font-bold text-xs">A</span>
          </div>
          <span className="font-serif text-xl tracking-widest text-gold uppercase hidden md:block">Aura</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 bg-gold-dim/5 px-6 py-2 rounded-full border border-gold/10 backdrop-blur-md">
          <NavLink 
            isActive={currentView === 'dashboard'} 
            onClick={() => setView('dashboard')}
            icon={<LayoutGrid size={18} />}
            label="Overview"
          />
          <NavLink 
            isActive={currentView === 'discovery'} 
            onClick={() => setView('discovery')}
            icon={<Search size={18} />}
            label="Discover"
          />
          <NavLink 
            isActive={currentView === 'history'} 
            onClick={() => setView('history')}
            icon={<Calendar size={18} />}
            label="My Aura"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className={cn(
                "p-2.5 rounded-full border transition-all",
                isNotificationsOpen 
                  ? "bg-gold text-obsidian border-gold" 
                  : "bg-obsidian-surface border-gold/20 text-gold-light hover:bg-gold/5"
              )}
            >
              <Bell size={20} />
              {!isNotificationsOpen && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_var(--gold)]" />
              )}
            </motion.button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-80 bg-obsidian-surface/80 backdrop-blur-2xl border border-gold/20 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-60"
                >
                  <div className="p-6 border-b border-gold/10 flex justify-between items-center">
                    <span className="font-serif text-lg text-gold">Notifications</span>
                    <span className="text-[10px] uppercase tracking-widest text-gold/40 font-bold">2 New</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto no-scrollbar">
                    <NotificationItem 
                      title="Provider is on the way" 
                      time="Just now" 
                      isNew 
                      description="Elena Rodriguez is heading to Aura West End for your 'Deep Obsidian Reset'."
                    />
                    <NotificationItem 
                      title="Appointment Confirmed" 
                      time="2h ago" 
                      isNew 
                      description="Your signature experience on April 12 has been successfully scheduled."
                    />
                    <NotificationItem 
                      title="Welcome to Aura" 
                      time="1d ago" 
                      description="Discover the new digital concierge experience designed for your serenity."
                    />
                  </div>
                  <button className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gold/60 hover:text-gold hover:bg-gold/5 transition-all">
                    View All Activity
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-gold text-obsidian font-medium hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-obsidian/20 flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="text-sm">Account</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

function NotificationItem({ title, time, description, isNew = false }: { title: string; time: string; description: string; isNew?: boolean }) {
  return (
    <div className={cn(
      "p-6 border-b border-gold/5 hover:bg-gold/5 transition-colors cursor-pointer group",
      isNew && "bg-gold-[5%]"
    )}>
      <div className="flex justify-between items-start mb-1">
        <span className={cn("text-xs font-bold uppercase tracking-widest", isNew ? "text-gold" : "text-cream/60")}>{title}</span>
        <span className="text-[10px] text-cream/20">{time}</span>
      </div>
      <p className="text-xs text-cream/40 leading-relaxed font-light group-hover:text-cream/70 transition-colors">
        {description}
      </p>
    </div>
  );
}

function NavLink({ isActive, onClick, icon, label }: { isActive: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-lg',
        isActive ? 'text-gold' : 'text-cream/40 hover:text-cream/70'
      )}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-gold/10 rounded-lg -z-10"
          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        />
      )}
    </button>
  );
}
