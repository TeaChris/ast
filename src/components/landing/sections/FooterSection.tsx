'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Resources: ['Documentation', 'Blog', 'Support', 'Status'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
};

export default function FooterSection() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: 'var(--obsidian)',
        borderTop: '1px solid rgba(212,175,55,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              className="flex items-center gap-2.5 mb-4"
              whileHover={{ scale: 1.01 }}
            >
              <span
                className="relative flex items-center justify-center w-7 h-7 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
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
                className="text-lg font-bold tracking-[0.12em]"
                style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
              >
                AURA
              </span>
            </motion.div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-comfortaa)',
                maxWidth: '220px',
              }}
            >
              Premium appointment scheduling for elite concierge service businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {['tw', 'ig', 'li'].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-200"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                  whileHover={{
                    background: 'rgba(212,175,55,0.2)',
                    borderColor: 'rgba(212,175,55,0.4)',
                    color: 'var(--gold)',
                  }}
                >
                  {s === 'tw' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ) : s === 'ig' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold"
                style={{
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-comfortaa)',
                }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-comfortaa)',
                      }}
                      whileHover={{ color: 'var(--cream)' }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
        >
          <p
            className="text-xs tracking-wider"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-comfortaa)',
            }}
          >
            © 2026 Aura. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-comfortaa)',
            }}
          >
            Crafted with precision for elite service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
