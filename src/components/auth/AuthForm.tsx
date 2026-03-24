'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import FloatingInput from './FloatingInput'
import GoogleButton from './GoogleButton'
import { toast } from 'sonner'

type Mode = 'sign-in' | 'sign-up'

const slideVariants = {
      enterRight: { x: 32, opacity: 0, filter: 'blur(4px)' },
      center: { x: 0, opacity: 1, filter: 'blur(0px)' },
      exitLeft: { x: -32, opacity: 0, filter: 'blur(4px)' },
      enterLeft: { x: -32, opacity: 0, filter: 'blur(4px)' },
      exitRight: { x: 32, opacity: 0, filter: 'blur(4px)' },
}

interface AuthFormProps {
      initialMode?: Mode
}

export default function AuthForm({ initialMode = 'sign-in' }: AuthFormProps) {
      const [mode, setMode] = useState<Mode>(initialMode)
      const [direction, setDirection] = useState<1 | -1>(1)
      const [shaking, setShaking] = useState(false)

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)

      const switchMode = (next: Mode) => {
            setDirection(next === 'sign-up' ? 1 : -1)
            setMode(next)
            setName('')
            setEmail('')
            setPassword('')
      }

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
            if (!email || !password || (mode === 'sign-up' && !name)) {
                  // Shake + toast
                  setShaking(true)
                  setTimeout(() => setShaking(false), 600)
                  toast.error('All fields are required.', {
                        icon: (
                              <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                              >
                                    <circle
                                          cx="8"
                                          cy="8"
                                          r="7"
                                          stroke="#D4AF37"
                                          strokeWidth="1.5"
                                    />
                                    <path
                                          d="M8 4.5v4"
                                          stroke="#D4AF37"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                    />
                                    <circle
                                          cx="8"
                                          cy="11.5"
                                          r="0.75"
                                          fill="#D4AF37"
                                    />
                              </svg>
                        ),
                        style: {
                              background: '#111116',
                              border: '1px solid rgba(212,175,55,0.2)',
                              color: 'var(--cream)',
                              fontSize: '0.875rem',
                              letterSpacing: '0.02em',
                        },
                  })
                  return
            }
            setLoading(true)
            // Auth logic wired up later (Node/Express backend)
            setTimeout(() => setLoading(false), 1800)
      }

      const enterVariant =
            direction === 1 ? slideVariants.enterRight : slideVariants.enterLeft
      const exitVariant =
            direction === 1 ? slideVariants.exitLeft : slideVariants.exitRight

      return (
            <motion.div
                  animate={
                        shaking
                              ? { x: [0, -10, 10, -8, 8, -4, 4, 0] }
                              : { x: 0 }
                  }
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  style={{ width: '100%' }}
            >
                  {/* Mode label */}
                  <div style={{ marginBottom: '0.5rem' }}>
                        <motion.p
                              key={mode + '_eyebrow'}
                              style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.35em',
                                    color: 'var(--gold)',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.75rem',
                              }}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                              }}
                        >
                              {mode === 'sign-in'
                                    ? 'Welcome back'
                                    : 'Join Aura'}
                        </motion.p>

                        <motion.h2
                              key={mode + '_heading'}
                              style={{
                                    fontFamily: 'var(--font-comfortaa)',
                                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                                    fontWeight: 700,
                                    color: 'var(--cream)',
                                    marginBottom: '0.35rem',
                                    letterSpacing: '-0.01em',
                                    lineHeight: 1.15,
                              }}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                    duration: 0.5,
                                    delay: 0.05,
                                    ease: [0.16, 1, 0.3, 1],
                              }}
                        >
                              {mode === 'sign-in'
                                    ? 'Sign in'
                                    : 'Create account'}
                        </motion.h2>
                  </div>

                  {/* Divider */}
                  <div
                        style={{
                              height: '1px',
                              background:
                                    'linear-gradient(90deg, rgba(212,175,55,0.35) 0%, transparent 60%)',
                              marginBottom: '2.25rem',
                              marginTop: '0.5rem',
                        }}
                  />

                  {/* Google Button */}
                  <div style={{ marginBottom: '2rem' }}>
                        <GoogleButton />
                  </div>

                  {/* OR separator */}
                  <div
                        style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              marginBottom: '2rem',
                        }}
                  >
                        <div
                              style={{
                                    flex: 1,
                                    height: '1px',
                                    background: 'rgba(245,240,232,0.08)',
                              }}
                        />
                        <span
                              style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.25em',
                                    color: 'var(--text-muted)',
                                    textTransform: 'uppercase',
                              }}
                        >
                              or
                        </span>
                        <div
                              style={{
                                    flex: 1,
                                    height: '1px',
                                    background: 'rgba(245,240,232,0.08)',
                              }}
                        />
                  </div>

                  {/* Animated form fields */}
                  <form onSubmit={handleSubmit} noValidate>
                        <AnimatePresence mode="wait" initial={false}>
                              <motion.div
                                    key={mode}
                                    initial={enterVariant}
                                    animate={slideVariants.center}
                                    exit={exitVariant}
                                    transition={{
                                          type: 'spring',
                                          stiffness: 300,
                                          damping: 30,
                                    }}
                                    style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '2rem',
                                    }}
                              >
                                    {mode === 'sign-up' && (
                                          <FloatingInput
                                                label="Full Name"
                                                value={name}
                                                onChange={setName}
                                                autoComplete="name"
                                                disabled={loading}
                                          />
                                    )}

                                    <FloatingInput
                                          label="Email Address"
                                          type="email"
                                          value={email}
                                          onChange={setEmail}
                                          autoComplete="email"
                                          disabled={loading}
                                    />

                                    <FloatingInput
                                          label="Password"
                                          type="password"
                                          value={password}
                                          onChange={setPassword}
                                          autoComplete={
                                                mode === 'sign-in'
                                                      ? 'current-password'
                                                      : 'new-password'
                                          }
                                          disabled={loading}
                                    />
                              </motion.div>
                        </AnimatePresence>

                        {/* Forgot password (sign-in only) */}
                        <AnimatePresence>
                              {mode === 'sign-in' && (
                                    <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{
                                                opacity: 1,
                                                height: 'auto',
                                          }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.3 }}
                                          style={{
                                                textAlign: 'right',
                                                marginTop: '0.75rem',
                                          }}
                                    >
                                          <button
                                                type="button"
                                                style={{
                                                      background: 'none',
                                                      border: 'none',
                                                      cursor: 'pointer',
                                                      fontFamily:
                                                            'var(--font-sans)',
                                                      fontSize: '0.75rem',
                                                      letterSpacing: '0.08em',
                                                      color: 'var(--text-muted)',
                                                      transition:
                                                            'color 0.2s ease',
                                                      textDecoration: 'none',
                                                }}
                                                onMouseEnter={(e) =>
                                                      ((
                                                            e.target as HTMLButtonElement
                                                      ).style.color =
                                                            'var(--gold)')
                                                }
                                                onMouseLeave={(e) =>
                                                      ((
                                                            e.target as HTMLButtonElement
                                                      ).style.color =
                                                            'var(--text-muted)')
                                                }
                                          >
                                                FORGOT PASSWORD?
                                          </button>
                                    </motion.div>
                              )}
                        </AnimatePresence>

                        {/* Submit button */}
                        <motion.button
                              type="submit"
                              disabled={loading}
                              whileHover={{ scale: 1.015 }}
                              whileTap={{ scale: 0.975 }}
                              style={{
                                    width: '100%',
                                    marginTop: '2.25rem',
                                    padding: '0.9rem 1.5rem',
                                    borderRadius: '9999px',
                                    border: 'none',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    background:
                                          'linear-gradient(135deg, var(--gold) 0%, #c9a227 100%)',
                                    color: 'var(--obsidian)',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 0 24px rgba(212,175,55,0.22)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    opacity: loading ? 0.75 : 1,
                                    transition:
                                          'opacity 0.2s ease, box-shadow 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                    if (!loading)
                                          (
                                                e.currentTarget as HTMLButtonElement
                                          ).style.boxShadow =
                                                '0 0 40px rgba(212,175,55,0.4)'
                              }}
                              onMouseLeave={(e) => {
                                    ;(
                                          e.currentTarget as HTMLButtonElement
                                    ).style.boxShadow =
                                          '0 0 24px rgba(212,175,55,0.22)'
                              }}
                        >
                              <AnimatePresence mode="wait">
                                    {loading ? (
                                          <motion.span
                                                key="loading"
                                                initial={{
                                                      opacity: 0,
                                                      scale: 0.8,
                                                }}
                                                animate={{
                                                      opacity: 1,
                                                      scale: 1,
                                                }}
                                                exit={{
                                                      opacity: 0,
                                                      scale: 0.8,
                                                }}
                                                transition={{ duration: 0.2 }}
                                                style={{
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '0.5rem',
                                                }}
                                          >
                                                <motion.span
                                                      animate={{ rotate: 360 }}
                                                      transition={{
                                                            duration: 0.9,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                      }}
                                                      style={{
                                                            display: 'flex',
                                                      }}
                                                >
                                                      <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 15 15"
                                                            fill="none"
                                                      >
                                                            <circle
                                                                  cx="7.5"
                                                                  cy="7.5"
                                                                  r="6"
                                                                  stroke="rgba(10,10,12,0.3)"
                                                                  strokeWidth="2"
                                                            />
                                                            <path
                                                                  d="M7.5 1.5 a6 6 0 0 1 6 6"
                                                                  stroke="#0A0A0C"
                                                                  strokeWidth="2"
                                                                  strokeLinecap="round"
                                                            />
                                                      </svg>
                                                </motion.span>
                                                <span>Processing…</span>
                                          </motion.span>
                                    ) : (
                                          <motion.span
                                                key="label"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.2 }}
                                          >
                                                {mode === 'sign-in'
                                                      ? 'Sign In'
                                                      : 'Create Account'}
                                          </motion.span>
                                    )}
                              </AnimatePresence>
                        </motion.button>
                  </form>

                  {/* Mode switch */}
                  <div
                        style={{
                              textAlign: 'center',
                              marginTop: '2rem',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.8rem',
                              color: 'var(--text-muted)',
                              letterSpacing: '0.04em',
                        }}
                  >
                        {mode === 'sign-in'
                              ? "Don't have an account? "
                              : 'Already have an account? '}
                        <button
                              type="button"
                              onClick={() =>
                                    switchMode(
                                          mode === 'sign-in'
                                                ? 'sign-up'
                                                : 'sign-in',
                                    )
                              }
                              style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.8rem',
                                    color: 'var(--gold)',
                                    fontWeight: 600,
                                    letterSpacing: '0.04em',
                                    padding: 0,
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '3px',
                                    textDecorationColor: 'rgba(212,175,55,0.4)',
                                    transition: 'color 0.2s ease',
                              }}
                        >
                              {mode === 'sign-in'
                                    ? 'Create account'
                                    : 'Sign in'}
                        </button>
                  </div>
            </motion.div>
      )
}
