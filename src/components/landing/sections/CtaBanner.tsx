'use client';

import ScrollReveal from '../ScrollReveal';
import MagneticButton from '../MagneticButton';

export default function CtaBanner() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-32"
      style={{ background: 'var(--obsidian-surface)' }}
    >
      {/* Grain texture via pseudo-like absolute div */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.4,
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--gold), transparent)',
        }}
      />
      {/* Gold bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--gold-dim), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Begin Your Journey
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Ready to elevate your{' '}
            <span className="aura-shimmer">client experience?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-comfortaa)',
            }}
          >
            Join over 1,200 premium service businesses already using Aura to
            eliminate no-shows, automate reminders, and reclaim their time.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/sign-up" variant="gold" size="lg">
              Start Free — 14 Days
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
            <p
              className="text-xs tracking-wider"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-comfortaa)',
              }}
            >
              No credit card · Cancel anytime
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
