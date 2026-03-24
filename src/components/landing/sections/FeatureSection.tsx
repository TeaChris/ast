'use client';

import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';
import DeviceFrame from '../DeviceFrame';

const features = [
  {
    icon: '◈',
    title: 'Smart Availability',
    desc: 'Staff calendars sync in real-time. No more double-bookings or manual conflicts.',
  },
  {
    icon: '◉',
    title: 'Multi-Service Booking',
    desc: 'Define services with durations & prices. Clients pick exactly what they need.',
  },
  {
    icon: '◇',
    title: 'Automated Reminders',
    desc: 'Email & SMS sent automatically before appointments. Virtually zero no-shows.',
  },
  {
    icon: '◈',
    title: 'Timezone-Aware',
    desc: 'Clients and staff each see times in their local timezone. Zero confusion.',
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="relative py-28 overflow-hidden"
      style={{ background: 'var(--obsidian-surface)' }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Asymmetric grid: text left, device right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content column */}
          <div className="relative">
            <ScrollReveal delay={0}>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-comfortaa)' }}
              >
                The Platform
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
              >
                Scheduling that{' '}
                <span style={{ color: 'var(--gold)' }}>feels effortless</span>,
                <br />
                runs flawlessly.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-base leading-relaxed mb-12 max-w-lg"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-comfortaa)',
                }}
              >
                Aura is not just a booking widget. It&apos;s a full scheduling
                orchestration layer — from first client click to post-appointment
                review request.
              </p>
            </ScrollReveal>

            {/* Feature pills — 2×2 organic layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {features.map((feat, i) => (
                <ScrollReveal key={feat.title} delay={0.25 + i * 0.08}>
                  <div
                    className="group flex gap-4 items-start p-4 rounded-2xl transition-all duration-300 cursor-default"
                    style={{
                      background: 'var(--obsidian-card)',
                      border: '1px solid rgba(212,175,55,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        'rgba(212,175,55,0.25)';
                      (e.currentTarget as HTMLDivElement).style.background =
                        'rgba(22,22,30,0.9)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        'rgba(212,175,55,0.08)';
                      (e.currentTarget as HTMLDivElement).style.background =
                        'var(--obsidian-card)';
                    }}
                  >
                    <span
                      className="text-xl mt-0.5 shrink-0"
                      style={{ color: 'var(--gold)' }}
                    >
                      {feat.icon}
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{
                          color: 'var(--cream)',
                          fontFamily: 'var(--font-comfortaa)',
                        }}
                      >
                        {feat.title}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-comfortaa)',
                        }}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Device Frame */}
          <ScrollReveal delay={0.2} direction="left">
            <DeviceFrame className="w-full">
              <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/scheduling-preview.png"
                  alt="Aura scheduling dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </DeviceFrame>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
