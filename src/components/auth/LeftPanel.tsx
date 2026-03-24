'use client'

import {
      motion,
      useMotionValue,
      useSpring,
      useInView,
      Variants,
} from 'framer-motion'
import { useRef, useEffect } from 'react'

const Orb = ({
      top,
      left,
      size,
      color,
      delay,
}: {
      top: string
      left: string
      size: number
      color: string
      delay: number
}) => {
      const x = useMotionValue(0)
      const y = useMotionValue(0)
      const springX = useSpring(x, { stiffness: 20, damping: 30 })
      const springY = useSpring(y, { stiffness: 20, damping: 30 })

      useEffect(() => {
            let frame: number
            const amplitude = size * 0.08
            const period = 14000 + delay * 3000

            const animate = (time: number) => {
                  x.set(Math.sin(time / period) * amplitude)
                  y.set(Math.cos(time / (period * 0.7)) * amplitude)
                  frame = requestAnimationFrame(animate)
            }
            frame = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(frame)
      }, [x, y, size, delay])

      return (
            <motion.div
                  style={{
                        position: 'absolute',
                        top,
                        left,
                        width: size,
                        height: size,
                        borderRadius: '50%',
                        background: color,
                        filter: `blur(${size * 0.45}px)`,
                        x: springX,
                        y: springY,
                        willChange: 'transform',
                        pointerEvents: 'none',
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                        duration: 2.5 + delay * 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: delay * 0.3,
                  }}
            />
      )
}

const stagger: Variants = {
      hidden: {},
      show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
}

const line: Variants = {
      hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
      show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      },
}

export default function LeftPanel() {
      const ref = useRef<HTMLDivElement>(null)
      const inView = useInView(ref, { once: true })

      return (
            <div
                  ref={ref}
                  style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        minHeight: '100vh',
                        overflow: 'hidden',
                        background:
                              'linear-gradient(135deg, #0A0A0C 0%, #111116 50%, #0d0d10 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '3.5rem',
                  }}
            >
                  {/* Gradient orbs */}
                  <Orb
                        top="-10%"
                        left="-15%"
                        size={520}
                        color="radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)"
                        delay={0}
                  />
                  <Orb
                        top="40%"
                        left="55%"
                        size={380}
                        color="radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
                        delay={1}
                  />
                  <Orb
                        top="65%"
                        left="-5%"
                        size={300}
                        color="radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)"
                        delay={2}
                  />

                  {/* Grain overlay */}
                  <div
                        style={{
                              position: 'absolute',
                              inset: '-10%',
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.07'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'repeat',
                              backgroundSize: '200px 200px',
                              animation: 'grain 8s steps(1) infinite',
                              mixBlendMode: 'overlay',
                              opacity: 0.6,
                              pointerEvents: 'none',
                              zIndex: 1,
                        }}
                  />

                  {/* Subtle vignette */}
                  <div
                        style={{
                              position: 'absolute',
                              inset: 0,
                              background:
                                    'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
                              pointerEvents: 'none',
                              zIndex: 2,
                        }}
                  />

                  {/* Thin horizontal rule above text */}
                  <motion.div
                        style={{
                              width: 48,
                              height: 1,
                              background: 'var(--gold)',
                              marginBottom: '2rem',
                              position: 'relative',
                              zIndex: 10,
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                        transition={{
                              duration: 0.8,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.2,
                        }}
                  />

                  {/* Staggered text reveal */}
                  <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        style={{ position: 'relative', zIndex: 10 }}
                  >
                        <motion.p
                              variants={line}
                              style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.3em',
                                    color: 'var(--gold)',
                                    textTransform: 'uppercase',
                                    marginBottom: '1rem',
                              }}
                        >
                              Premium Scheduling
                        </motion.p>

                        <motion.h1
                              variants={line}
                              style={{
                                    fontFamily: 'var(--font-comfortaa)',
                                    fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                                    fontWeight: 700,
                                    lineHeight: 1.07,
                                    color: 'var(--cream)',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-0.02em',
                              }}
                        >
                              Every{' '}
                              <span
                                    style={{
                                          backgroundImage:
                                                'linear-gradient(90deg, var(--gold-dim) 0%, var(--gold) 50%, var(--gold-dim) 100%)',
                                          backgroundSize: '200% auto',
                                          animation:
                                                'shimmer 3s linear infinite',
                                          WebkitBackgroundClip: 'text',
                                          WebkitTextFillColor: 'transparent',
                                          backgroundClip: 'text',
                                    }}
                              >
                                    moment
                              </span>
                              <br />
                              refined.
                        </motion.h1>

                        <motion.p
                              variants={line}
                              style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.75,
                                    color: 'var(--text-secondary)',
                                    maxWidth: '26rem',
                                    letterSpacing: '0.01em',
                              }}
                        >
                              The intelligent scheduling layer for elite
                              concierge practices. Automate, delight, and
                              elevate every client touchpoint.
                        </motion.p>

                        {/* Stat pills */}
                        <motion.div
                              variants={line}
                              style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    marginTop: '2.5rem',
                                    flexWrap: 'wrap',
                              }}
                        >
                              {[
                                    { value: '99%', label: 'Show rate' },
                                    { value: '3×', label: 'Faster booking' },
                                    { value: '4.9★', label: 'Client rating' },
                              ].map(({ value, label }) => (
                                    <div
                                          key={label}
                                          style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.25rem',
                                          }}
                                    >
                                          <span
                                                style={{
                                                      fontFamily:
                                                            'var(--font-comfortaa)',
                                                      fontSize: '1.5rem',
                                                      fontWeight: 700,
                                                      color: 'var(--gold)',
                                                }}
                                          >
                                                {value}
                                          </span>
                                          <span
                                                style={{
                                                      fontFamily:
                                                            'var(--font-sans)',
                                                      fontSize: '0.7rem',
                                                      letterSpacing: '0.2em',
                                                      color: 'var(--text-muted)',
                                                      textTransform:
                                                            'uppercase',
                                                }}
                                          >
                                                {label}
                                          </span>
                                    </div>
                              ))}
                        </motion.div>
                  </motion.div>

                  {/* Bottom brand mark */}
                  <motion.div
                        style={{
                              position: 'absolute',
                              top: '2.5rem',
                              left: '3.5rem',
                              zIndex: 10,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                        }}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                        {/* Logo mark */}
                        <div
                              style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: '10px',
                                    background:
                                          'linear-gradient(135deg, var(--gold) 0%, rgba(212,175,55,0.5) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                              }}
                        >
                              <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                              >
                                    <circle
                                          cx="8"
                                          cy="8"
                                          r="5.5"
                                          stroke="#0A0A0C"
                                          strokeWidth="2"
                                          fill="none"
                                    />
                                    <circle
                                          cx="8"
                                          cy="8"
                                          r="2"
                                          fill="#0A0A0C"
                                    />
                              </svg>
                        </div>
                        <span
                              style={{
                                    fontFamily: 'var(--font-comfortaa)',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    color: 'var(--cream)',
                                    letterSpacing: '0.05em',
                              }}
                        >
                              Aura
                        </span>
                  </motion.div>
            </div>
      )
}
