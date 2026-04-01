import React from 'react';
import Sidebar from './components/Sidebar';
import PortalTopBar from './components/PortalTopBar';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0E14] flex flex-col font-comfortaa">
      {/* Global Top Navigation Bar */}
      <PortalTopBar />

      <div className="flex flex-1 relative overflow-hidden">
        {/* Global Sidebar Navigation */}
        <Sidebar aria-label="Sidebar" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pl-[280px]">
          <div className="p-12 max-w-[1600px] mx-auto min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
