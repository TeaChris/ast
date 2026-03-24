'use client';

import { motion } from 'framer-motion';

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export default function DeviceFrame({
  children,
  className = '',
  url = 'app.aura.io/dashboard',
}: DeviceFrameProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -10, -4, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.33, 0.66, 1],
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-3 rounded-2xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, var(--glow-soft) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Browser frame */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(22, 22, 30, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow:
            '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08), inset 0 1px 0 rgba(212,175,55,0.15)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{
            background: 'rgba(16, 16, 22, 0.9)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.12)',
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27C940' }} />
          </div>

          {/* URL bar */}
          <div
            className="flex-1 flex items-center gap-2 px-3 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Lock icon */}
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              style={{ opacity: 0.4 }}
            >
              <path
                d="M8 5V4a3 3 0 0 0-6 0v1H1v7h8V5H8ZM3 4a2 2 0 1 1 4 0v1H3V4Z"
                fill="currentColor"
              />
            </svg>
            <span
              className="text-xs tracking-wide flex-1 text-center"
              style={{ color: 'var(--cream-dim)', fontFamily: 'var(--font-comfortaa)' }}
            >
              {url}
            </span>
          </div>

          {/* Gold accent dot */}
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--gold)', opacity: 0.6 }}
          />
        </div>

        {/* Content area */}
        <div className="relative overflow-hidden">{children}</div>
      </div>
    </motion.div>
  );
}
