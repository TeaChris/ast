'use client'

import { motion } from 'framer-motion'
import { useState, useId } from 'react'

interface FloatingInputProps {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  autoComplete?: string
  disabled?: boolean
}

export default function FloatingInput({
  label,
  type = 'text',
  value,
  onChange,
  autoComplete,
  disabled,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false)
  const id = useId()
  const isFilled = value.length > 0
  const isUp = focused || isFilled

  return (
    <div className="relative w-full">
      {/* Floating label */}
      <motion.label
        htmlFor={id}
        style={{
          position: 'absolute',
          left: 0,
          pointerEvents: 'none',
          color: isUp ? 'var(--gold)' : 'var(--text-muted)',
          fontFamily: 'var(--font-sans)',
          letterSpacing: isUp ? '0.15em' : '0.05em',
          transformOrigin: 'left center',
        }}
        animate={
          isUp
            ? { y: -20, scale: 0.72, opacity: 1 }
            : { y: 0, scale: 1, opacity: 0.5 }
        }
        initial={{ y: 0, scale: 1, opacity: 0.5 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        {label}
      </motion.label>

      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete={autoComplete}
        disabled={disabled}
        className="aura-input"
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(245,240,232,0.15)',
          outline: 'none',
          paddingTop: '1.5rem',
          paddingBottom: '0.5rem',
          color: 'var(--cream)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          letterSpacing: '0.03em',
        }}
      />

      {/* Expanding bottom border */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          height: '1.5px',
          background: 'var(--gold)',
          translateX: '-50%',
        }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      />
    </div>
  )
}
