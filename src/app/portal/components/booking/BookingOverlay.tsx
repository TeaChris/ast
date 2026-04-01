'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, MapPin, User } from 'lucide-react';
import { usePortalStore } from '@/lib/store/usePortalStore';
import DatePicker from '@/app/portal/components/booking/DatePicker';
import ServiceSummary from '@/app/portal/components/booking/ServiceSummary';

export default function BookingOverlay() {
  const { isBookingOpen, setBookingOpen, selectedService } = usePortalStore();
  const [step, setStep] = useState(1);

  if (!selectedService) return null;

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 bg-obsidian flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Left Panel: Booking Steps */}
          <div className="flex-1 overflow-y-auto p-12 md:p-24 no-scrollbar">
            <button 
              onClick={() => setBookingOpen(false)}
              className="absolute top-12 left-12 p-3 rounded-full hover:bg-gold/10 text-gold transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-xl mx-auto"
            >
              <span className="text-gold/60 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                Booking Step {step} of 3
              </span>
              <h2 className="text-5xl font-serif text-cream mb-12">
                Select Your <span className="italic text-gold">Sacred Moment</span>
              </h2>

              <div className="space-y-12">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <DatePicker />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'].map((time) => (
                        <button
                          key={time}
                          className="px-6 py-4 rounded-2xl border border-gold/10 text-cream/70 hover:border-gold hover:text-gold transition-all duration-300"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mt-16 flex items-center gap-6">
                {step > 1 && (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="text-cream/50 uppercase tracking-widest text-xs font-bold hover:text-cream transition-colors"
                  >
                    Back
                  </button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => step < 3 && setStep(step + 1)}
                  className="flex-1 bg-gold text-obsidian px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all"
                >
                  {step === 3 ? 'Confirm Appointment' : 'Continue to Time'}
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Panel: Service Summary Card */}
          <div className="w-full md:w-[450px] bg-obsidian-surface/60 backdrop-blur-2xl border-l border-gold/10 p-12 flex flex-col justify-between">
            <ServiceSummary service={selectedService} />

            <div className="space-y-6 mt-12 bg-white/5 p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <User size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Provider</span>
                  <span className="text-sm">Elena Rodriguez (Master Specialist)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Location</span>
                  <span className="text-sm">Aura West End (VIP Suite 04)</span>
                </div>
              </div>
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/20 font-medium text-center mt-8">
              Cancellations within 24h incur a 50% fee.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
