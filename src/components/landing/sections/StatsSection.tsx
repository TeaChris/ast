'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

const stats = [
  { value: 10000, suffix: '+', label: 'Appointments Scheduled' },
  { value: 98, suffix: '%', label: 'No-show Reduction' },
  { value: 50, suffix: '+', label: 'Service Integrations' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const testimonials = [
  {
    quote:
      'Aura cut our no-show rate from 30% to nearly zero. Our front desk now focuses on hospitality, not admin.',
    author: 'Dr. Priya Mehta',
    role: 'Medical Director, Wellness Clinic',
    initials: 'PM',
  },
  {
    quote:
      'We handle 40+ stylists across 3 locations. Aura makes it feel like one seamless operation.',
    author: 'Marcus Osei',
    role: 'Owner, Luxe Hair Studio',
    initials: 'MO',
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--obsidian-surface)' }}
    >
      {/* Gold line accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--gold-dim), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-comfortaa)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="text-sm tracking-wider uppercase"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <motion.div
                className="relative p-8 rounded-3xl"
                style={{
                  background: 'var(--obsidian-card)',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(212,175,55,0.25)',
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Quote mark */}
                <span
                  className="absolute top-6 right-8 text-6xl leading-none select-none pointer-events-none"
                  style={{ color: 'var(--gold-dim)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-base leading-relaxed mb-6 relative z-10"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: 'var(--gold-dim)',
                      border: '1px solid rgba(212,175,55,0.3)',
                      color: 'var(--gold)',
                      fontFamily: 'var(--font-comfortaa)',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: 'var(--cream)',
                        fontFamily: 'var(--font-comfortaa)',
                      }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-comfortaa)',
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
