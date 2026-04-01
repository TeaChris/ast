import React from 'react';
import Sidebar from './components/Sidebar';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0E14] flex relative">
      {/* Global Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen relative z-10 pl-[280px] w-full">
        <div className="p-12 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>

      {/* Persistent Overlay (Optional/Disabled for clean UI) */}
      {/* <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,0,0,0.02),transparent_50%)] z-0 pointer-events-none" /> */}
    </div>
  );
}
