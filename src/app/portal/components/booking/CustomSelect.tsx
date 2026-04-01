'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomSelectProps {
      options: string[]
      value: string
      onChange: (value: string) => void
      placeholder: string
      label?: string
}

export default function CustomSelect({
      options,
      value,
      onChange,
      placeholder,
      label,
}: CustomSelectProps) {
      const [isOpen, setIsOpen] = useState(false)
      const containerRef = useRef<HTMLDivElement>(null)

      // Close when clicking outside
      useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                  if (
                        containerRef.current &&
                        !containerRef.current.contains(event.target as Node)
                  ) {
                        setIsOpen(false)
                  }
            }
            document.addEventListener('mousedown', handleClickOutside)
            return () =>
                  document.removeEventListener('mousedown', handleClickOutside)
      }, [])

      return (
            <div
                  className="space-y-2 relative font-comfortaa"
                  ref={containerRef}
            >
                  {label && (
                        <label className="text-sm font-bold text-[#0B0E14]">
                              {label}
                        </label>
                  )}

                  <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                              'w-full h-14 pl-5 pr-12 rounded-xl bg-[#F8F9FA] border transition-all duration-200 flex items-center justify-between group',
                              isOpen
                                    ? 'border-[#ADB5BD] ring-2 ring-[#F8F9FA]'
                                    : 'border-[#E9ECEF] hover:border-[#ADB5BD]',
                        )}
                  >
                        <span
                              className={cn(
                                    'text-sm font-medium',
                                    value ? 'text-[#0B0E14]' : 'text-[#6C757D]',
                              )}
                        >
                              {value || placeholder}
                        </span>
                        <div
                              className={cn(
                                    'transition-transform duration-200 text-[#ADB5BD]',
                                    isOpen && 'rotate-180',
                              )}
                        >
                              <ChevronDown size={20} />
                        </div>
                  </button>

                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{
                                          opacity: 0,
                                          y: -10,
                                          scale: 0.95,
                                    }}
                                    animate={{ opacity: 1, y: 4, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{
                                          duration: 0.2,
                                          ease: [0.23, 1, 0.32, 1],
                                    }}
                                    className="absolute z-60 left-0 right-0 top-full bg-white border border-[#E9ECEF] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden py-2"
                              >
                                    <div className="max-h-60 overflow-y-auto no-scrollbar">
                                          {options.map((option) => (
                                                <button
                                                      key={option}
                                                      type="button"
                                                      onClick={() => {
                                                            onChange(option)
                                                            setIsOpen(false)
                                                      }}
                                                      className={cn(
                                                            'w-full text-left px-5 py-3.5 text-sm transition-colors',
                                                            value === option
                                                                  ? 'bg-[#F8F9FA] text-[#0B0E14] font-bold'
                                                                  : 'text-[#6C757D] hover:bg-[#F8F9FA] hover:text-[#0B0E14]',
                                                      )}
                                                >
                                                      {option}
                                                </button>
                                          ))}
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      )
}
