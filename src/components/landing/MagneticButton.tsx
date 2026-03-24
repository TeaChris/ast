'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
      children: React.ReactNode
      className?: string
      onClick?: () => void
      href?: string
      variant?: 'gold' | 'outline' | 'ghost'
      size?: 'sm' | 'md' | 'lg'
}

export default function MagneticButton({
      children,
      className = '',
      onClick,
      href,
      variant = 'gold',
      size = 'md',
}: MagneticButtonProps) {
      const buttonRef = useRef<HTMLButtonElement>(null)
      const anchorRef = useRef<HTMLAnchorElement>(null)
      const ref = href ? anchorRef : buttonRef
      const [isHovered, setIsHovered] = useState(false)

      const x = useMotionValue(0)
      const y = useMotionValue(0)

      const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
      const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })

      const handleMouseMove = (e: React.MouseEvent) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = e.clientX - cx
            const dy = e.clientY - cy
            x.set(dx * 0.35)
            y.set(dy * 0.35)
      }

      const handleMouseLeave = () => {
            setIsHovered(false)
            x.set(0)
            y.set(0)
      }

      const sizeClasses = {
            sm: 'px-5 py-2.5 text-sm',
            md: 'px-7 py-3.5 text-base',
            lg: 'px-10 py-4 text-lg',
      }

      const variantStyles = {
            gold: {
                  base: 'text-[var(--obsidian)] font-semibold tracking-wide',
                  bg: 'bg-[var(--gold)]',
                  border: 'border border-[var(--gold)]',
                  hover: 'hover:text-[var(--obsidian)]',
            },
            outline: {
                  base: 'text-[var(--cream)] font-semibold tracking-wide',
                  bg: 'bg-transparent',
                  border: 'border border-[var(--gold)]',
                  hover: 'hover:text-[var(--obsidian)]',
            },
            ghost: {
                  base: 'text-[var(--cream-dim)] font-medium tracking-wide',
                  bg: 'bg-transparent',
                  border: 'border border-transparent',
                  hover: 'hover:text-[var(--cream)]',
            },
      }

      const v = variantStyles[variant]

      const commonProps = {
            style: { x: springX, y: springY },
            onMouseMove: handleMouseMove,
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: handleMouseLeave,
            onClick,
            className: `relative overflow-hidden rounded-full cursor-pointer select-none transition-all duration-300 ${sizeClasses[size]} ${v.base} ${v.bg} ${v.border} ${v.hover} ${className}`,
            whileTap: { scale: 0.96 },
      }

      const fillVariants = {
            idle: { scaleX: 0, scaleY: 0, opacity: 0 },
            hovered: { scaleX: 1, scaleY: 1, opacity: 1 },
      }

      const inner = (
            <>
                  {/* Liquid fill overlay */}
                  {(variant === 'outline' || variant === 'ghost') && (
                        <motion.span
                              className="absolute inset-0 rounded-full bg-(--gold) origin-center pointer-events-none"
                              variants={fillVariants}
                              animate={isHovered ? 'hovered' : 'idle'}
                              transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                              }}
                        />
                  )}
                  {/* Gold shimmer for gold variant */}
                  {variant === 'gold' && isHovered && (
                        <motion.span
                              className="absolute inset-0 rounded-full pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              style={{
                                    background:
                                          'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                                    backgroundSize: '200% 100%',
                              }}
                        />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                        {children}
                  </span>
            </>
      )

      if (href) {
            return (
                  <motion.a
                        ref={anchorRef}
                        href={href}
                        {...commonProps}
                  >
                        {inner}
                  </motion.a>
            )
      }

      return <motion.button ref={buttonRef} {...commonProps}>{inner}</motion.button>
}
