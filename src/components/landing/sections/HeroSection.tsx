'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import MagneticButton from '../MagneticButton';

const heroTransition: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: heroTransition,
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'backOut' as const },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      {/* Radial glow behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6 pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={badgeVariants}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: 'var(--gold-dim)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--gold)', boxShadow: '0 0 6px var(--gold)' }}
            />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-comfortaa)' }}
            >
              Now in Early Access
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
        >
          Every Appointment{' '}
          <span className="relative inline-block">
            <span className="aura-shimmer">Perfectly</span>
          </span>
          <br />
          Orchestrated.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-comfortaa)',
            letterSpacing: '0.02em',
          }}
        >
          Aura replaces the chaos of phone bookings and paper calendars with a
          seamless, intelligent scheduling experience — built for elite service
          businesses that refuse to compromise.
        </motion.p>

        {/* CTA group */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton href="/sign-up" variant="gold" size="lg">
            Start Scheduling Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
          <MagneticButton href="#demo" variant="outline" size="lg">
            Watch the 2-min demo
          </MagneticButton>
        </motion.div>

        {/* Social proof micro-text */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-xs tracking-[0.15em] uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-comfortaa)' }}
        >
          Trusted by 1,200+ salons, clinics &amp; consultants worldwide
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-comfortaa)' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
