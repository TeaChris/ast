'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { type Service } from '@/lib/store/usePortalStore'
import Image from 'next/image'

export default function ServiceSummary({ service }: { service: Service }) {
      const displayPrice = service.price

      return (
            <div className="space-y-8">
                  <div>
                        <h3 className="text-gold/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
                              Service Summary
                        </h3>
                        <div className="relative h-64 rounded-[40px] overflow-hidden mb-6 border border-gold/20 shadow-2xl">
                              <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 to-transparent" />
                              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                          <h4 className="text-2xl font-comfortaa text-cream">
                                                {service.name}
                                          </h4>
                                          <div className="flex items-center gap-2 text-gold/80 text-xs mt-1">
                                                <Star
                                                      size={12}
                                                      fill="currentColor"
                                                />
                                                <span className="font-bold">
                                                      {service.rating}
                                                </span>
                                                <span className="opacity-40">
                                                      |
                                                </span>
                                                <span>{service.duration}</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <p className="text-cream/50 text-sm leading-relaxed font-light italic">
                              &quot;{service.description}&quot;
                        </p>
                  </div>

                  <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center text-cream/70">
                              <span className="text-xs uppercase tracking-widest font-medium opacity-50">
                                    Standard Rate
                              </span>
                              <div className="flex items-baseline gap-1">
                                    <span className="text-gold/60 text-sm">
                                          $
                                    </span>
                                    <DigitTumbler value={displayPrice} />
                              </div>
                        </div>

                        <div className="flex justify-between items-center text-cream/70">
                              <span className="text-xs uppercase tracking-widest font-medium opacity-50">
                                    Concierge Service Fee
                              </span>
                              <div className="flex items-baseline gap-1">
                                    <span className="text-gold/60 text-sm">
                                          $
                                    </span>
                                    <span className="text-xl font-light">
                                          25.00
                                    </span>
                              </div>
                        </div>

                        <div className="h-px bg-gold/10 my-2" />

                        <div className="flex justify-between items-end">
                              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold pb-2">
                                    Total Amount due
                              </span>
                              <div className="flex items-baseline gap-1">
                                    <span className="text-gold text-2xl font-light">
                                          $
                                    </span>
                                    <DigitTumbler
                                          value={displayPrice + 25}
                                          isTotal
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

function DigitTumbler({
      value,
      isTotal = false,
}: {
      value: number
      isTotal?: boolean
}) {
      const digits = value.toString().split('')

      return (
            <div className="flex overflow-hidden">
                  {digits.map((digit, i) => (
                        <motion.span
                              key={`${i}-${digit}`}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                    delay: i * 0.05,
                              }}
                              className={
                                    isTotal
                                          ? 'text-4xl font-comfortaa text-gold'
                                          : 'text-xl font-light text-cream'
                              }
                        >
                              {digit}
                        </motion.span>
                  ))}
                  <span
                        className={
                              isTotal
                                    ? 'text-4xl font-comfortaa text-gold'
                                    : 'text-xl font-light text-cream'
                        }
                  >
                        .00
                  </span>
            </div>
      )
}
