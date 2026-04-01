'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortalStore } from '@/lib/store/usePortalStore';
import ServiceDiscovery from './components/ServiceDiscovery';
import BookingHistory from './components/history/BookingHistory';
import Dashboard from './components/dashboard/Dashboard';
import BookingOverlay from './components/booking/BookingOverlay';

export default function PortalPage() {
  const { currentView } = usePortalStore();

  return (
    <div className="min-h-screen flex flex-col mb-24 overflow-hidden">


      {/* Main View Transition */}
      <AnimatePresence mode="wait">
        {currentView === 'dashboard' ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <Dashboard />
          </motion.div>
        ) : currentView === 'discovery' ? (
          <motion.div
            key="discovery"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <ServiceDiscovery />
          </motion.div>
        ) : (
          <motion.div
            key="history"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <BookingHistory />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Booking Overlay */}
      <BookingOverlay />
    </div>
  );
}
