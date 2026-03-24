'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled
          ? 'rgba(10, 10, 12, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(212, 175, 55, 0.12)'
          : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <motion.a
        href="/"
        className="flex items-center gap-2.5 cursor-pointer select-none"
        whileHover={{ scale: 1.02 }}
      >
        {/* Aura mark */}
        <span
          className="relative flex items-center justify-center w-8 h-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
            boxShadow: '0 0 16px var(--glow-soft)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="3" fill="#0A0A0C" />
            <path
              d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.41 1.41M11.36 11.36l1.41 1.41M11.36 4.63l1.41-1.41M3.22 12.78l1.41-1.41"
              stroke="#0A0A0C"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span
          className="text-xl font-bold tracking-[0.12em]"
          style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
        >
          AURA
        </span>
      </motion.a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-sm tracking-wider transition-colors duration-200"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-comfortaa)',
            }}
            whileHover={{ color: 'var(--gold)', opacity: 1 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <motion.a
          href="#signin"
          className="hidden md:block text-sm tracking-wider transition-colors duration-200"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-comfortaa)',
          }}
          whileHover={{ color: 'var(--cream)' }}
        >
          Sign In
        </motion.a>
        <MagneticButton href="#get-started" variant="gold" size="sm">
          Get Started
        </MagneticButton>
      </div>
    </motion.header>
  );
}
