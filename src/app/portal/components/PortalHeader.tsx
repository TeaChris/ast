'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind } from 'lucide-react';

export default function PortalHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  const greetingWords = "Experience the Extraordinary.".split(" ");

  return (
    <header className="pt-32 pb-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              The Digital Concierge
            </span>
            <h1 className="text-5xl md:text-7xl font-comfortaa text-cream leading-tight">
              Bonjour, <span className="italic text-gold">Alexander</span>
            </h1>
          </motion.div>

          <div className="flex gap-2 mt-4 overflow-hidden">
            {greetingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (i * 0.1), 
                  ease: "easeOut" 
                }}
                className="text-cream/50 text-lg font-light"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Weather & Time Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="bg-obsidian-surface/60 backdrop-blur-xl border border-gold/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col border-r border-gold/10 pr-6">
            <span className="text-cream text-3xl font-light tracking-tighter">{timeString}</span>
            <span className="text-gold/60 text-xs uppercase tracking-widest mt-1">{dateString}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-gold/5 rounded-2xl border border-gold/10">
              <Sun className="text-gold w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-cream text-xl font-light">21°C</span>
              <span className="text-cream/40 text-xs flex items-center gap-1 uppercase tracking-wider">
                London <Wind size={10} /> 4km/h
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
