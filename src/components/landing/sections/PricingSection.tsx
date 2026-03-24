'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import MagneticButton from '../MagneticButton';

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  featured: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: 'Essentials',
    price: '$29',
    period: '/mo',
    tagline: 'For solo practitioners',
    features: [
      'Up to 3 staff members',
      'Unlimited bookings',
      'Email reminders',
      'Basic admin dashboard',
      'Multi-service support',
    ],
    featured: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/mo',
    tagline: 'For growing teams',
    features: [
      'Up to 15 staff members',
      'SMS + Email reminders',
      'Advanced admin dashboard',
      'Calendar integrations',
      'Custom booking page',
      'Analytics & reporting',
    ],
    featured: true,
    cta: 'Get Studio',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For multi-location businesses',
    features: [
      'Unlimited staff',
      'Dedicated support',
      'API access & webhooks',
      'White-label branding',
      'SLA guarantee',
      'Custom integrations',
    ],
    featured: false,
    cta: 'Contact Sales',
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-28 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Pricing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Simple, transparent pricing.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p
            className="text-center text-base mb-16"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-comfortaa)',
            }}
          >
            14-day free trial on all plans. No credit card required.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.12}>
              <motion.div
                className="relative rounded-3xl p-8 flex flex-col"
                style={{
                  background: plan.featured
                    ? 'rgba(212,175,55,0.06)'
                    : 'var(--obsidian-card)',
                  border: plan.featured
                    ? '1px solid rgba(212,175,55,0.4)'
                    : '1px solid rgba(212,175,55,0.1)',
                  boxShadow: plan.featured
                    ? '0 0 60px rgba(212,175,55,0.08), 0 20px 60px rgba(0,0,0,0.4)'
                    : '0 8px 32px rgba(0,0,0,0.3)',
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider"
                    style={{
                      background: 'var(--gold)',
                      color: 'var(--obsidian)',
                      fontFamily: 'var(--font-comfortaa)',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <p
                  className="text-xs tracking-[0.2em] uppercase mb-2"
                  style={{
                    color: plan.featured ? 'var(--gold)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                >
                  {plan.tagline}
                </p>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                >
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1 mb-8">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: plan.featured ? 'var(--gold)' : 'var(--cream)',
                      fontFamily: 'var(--font-comfortaa)',
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="text-sm mb-1"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-comfortaa)',
                      }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <span style={{ color: 'var(--gold)', fontSize: '10px' }}>◆</span>
                      <span
                        className="text-sm"
                        style={{
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-comfortaa)',
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={plan.name === 'Enterprise' ? 'mailto:sales@ouraura.com' : '/sign-up'}
                  variant={plan.featured ? 'gold' : 'outline'}
                  size="md"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </MagneticButton>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
