import React from 'react';
import PortalNavbar from './components/PortalNavbar';
import GrainOverlay from '@/components/landing/GrainOverlay';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-obsidian text-cream relative selection:bg-gold/30 selection:text-gold">
      {/* Visual Effects */}
      <GrainOverlay />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,175,55,0.08),transparent_50%)] z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.05),transparent_50%)] z-0 pointer-events-none" />

      {/* Global Navigation */}
      <PortalNavbar />

      {/* Main Content Area */}
      <main className="relative z-10 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gold/5 text-center mt-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-cream/20 font-bold">
          &copy; 2026 Aura Concierge. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
